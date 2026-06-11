import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE } from "../services/api";
import "./Chatbot.css";

const THEME = {
  bg: "#faf7f3",
  surface: "#ffffff",
  text: "#2a2a2a",
  textMuted: "#8a8a8a",
  rose: "#c4909f",
  burgundy: "#7a3347",
  gold: "#c9a96e",
  success: "#70c878",
  error: "#d97070",
};

// Simple markdown renderer — handles bold, bullets, numbered lists, line breaks
function MarkdownMessage({ text }) {
  const renderMarkdown = (raw) => {
    const lines = raw.split("\n");
    const elements = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Bullet list item
      if (/^[•\-\*] /.test(line)) {
        const listItems = [];
        while (i < lines.length && /^[•\-\*] /.test(lines[i])) {
          listItems.push(lines[i].replace(/^[•\-\*] /, ""));
          i++;
        }
        elements.push(
          <ul key={i} style={{ margin: "6px 0", paddingLeft: "18px" }}>
            {listItems.map((item, j) => (
              <li key={j} style={{ marginBottom: "3px" }}>
                {renderInline(item)}
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // Numbered list item
      if (/^\d+\. /.test(line)) {
        const listItems = [];
        while (i < lines.length && /^\d+\. /.test(lines[i])) {
          listItems.push(lines[i].replace(/^\d+\. /, ""));
          i++;
        }
        elements.push(
          <ol key={i} style={{ margin: "6px 0", paddingLeft: "18px" }}>
            {listItems.map((item, j) => (
              <li key={j} style={{ marginBottom: "3px" }}>
                {renderInline(item)}
              </li>
            ))}
          </ol>
        );
        continue;
      }

      // Empty line = spacer
      if (line.trim() === "") {
        elements.push(<div key={i} style={{ height: "6px" }} />);
        i++;
        continue;
      }

      // Normal paragraph
      elements.push(
        <p key={i} style={{ margin: "2px 0" }}>
          {renderInline(line)}
        </p>
      );
      i++;
    }

    return elements;
  };

  const renderInline = (text) => {
    // Handle **bold**
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return <div style={{ lineHeight: "1.6" }}>{renderMarkdown(text)}</div>;
}

function Chatbot({ isOpen, onClose, isLoggedIn }) {
  const navigate = useNavigate();
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [userName, setUserName] = useState("");
  const messagesEndRef = useRef(null);

  // Get user name from localStorage
  useEffect(() => {
    const userInfo = localStorage.getItem("arke_user");
    if (userInfo) {
      try {
        const user = JSON.parse(userInfo);
        setUserName(user.name || user.firstName || "");
      } catch (err) {
        console.log("Could not parse user info");
      }
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && isLoggedIn && !conversationId) {
      startConversation();
    }
  }, [isOpen, isLoggedIn]);

  const startConversation = async () => {
    if (!isLoggedIn) {
      setMessages([
        {
          sender: "bot",
          message: "Please log in to chat with our jewelry assistant!",
          timestamp: new Date(),
        },
      ]);
      return;
    }

    setIsInitializing(true);
    try {
      const response = await fetch(`${API_BASE}/chat/start`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("arke_token")}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setConversationId(data.data.conversationId);
        setMessages([
          {
            sender: "bot",
            message: data.data.initialMessage,
            timestamp: new Date(),
          },
        ]);
      }
    } catch (err) {
      console.error("Error starting conversation:", err);
      setMessages([
        {
          sender: "bot",
          message: "Sorry, I'm having trouble connecting. Please try again!",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsInitializing(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || !conversationId) return;

    const userMessage = inputValue;
    setInputValue("");

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: userMessage,
        timestamp: new Date(),
      },
    ]);

    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/chat/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("arke_token")}`,
        },
        body: JSON.stringify({ conversationId, message: userMessage }),
      });
      const data = await response.json();
      if (data.success) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            message: data.data.botMessage,
            timestamp: new Date(),
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            message: "Sorry, I couldn't process that. Please try again!",
            timestamp: new Date(),
          },
        ]);
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          message: "Connection error. Please check your internet and try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="chatbot-header-left">
          <button className="pause-btn">
            <div className="pause-icon">
              <div className="pause-bar"></div>
              <div className="pause-bar"></div>
            </div>
          </button>
          <div className="chatbot-header-content">
            <h3 className="chatbot-header-title">
              {userName ? `Welcome, ${userName}` : "ARKE Jewelry Assistant"}
            </h3>
            <div className="chatbot-header-subtitle">PERSONAL STYLIST · AI POWERED</div>
            <div className="online-status">
              <div className="online-dot"></div>
              <span className="online-text">Online now</span>
            </div>
          </div>
        </div>

        {/* FIX: e.stopPropagation() prevents the header from swallowing the click */}
        <button
          className="chatbot-remove-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          title="Close"
        >
          ✕
        </button>
      </div>

      <div className="chatbot-messages">
        {!isLoggedIn ? (
          <div className="login-prompt">
            <p>Please log in to chat with our jewelry assistant!</p>
            <button
              className="login-button"
              onClick={() => {
                onClose();
                navigate("/login");
              }}
            >
              Go to Login
            </button>
          </div>
        ) : isInitializing ? (
          <div className="chatbot-loading">
            <div className="loading-dot" />
            <div className="loading-dot" />
            <div className="loading-dot" />
          </div>
        ) : (
          <>
            {messages.map((msg, idx) => {
              const isWelcomeMessage = idx === 0 && msg.sender === "bot";
              return (
                <div key={idx} className={`message ${msg.sender}`}>
                  {msg.sender === "bot" && (
                    <div
                      className={`message-bubble bot-bubble ${
                        isWelcomeMessage ? "welcome-message" : ""
                      }`}
                    >
                      <MarkdownMessage text={msg.message} />
                    </div>
                  )}
                  {msg.sender === "user" && (
                    <div className="message-bubble user-bubble">{msg.message}</div>
                  )}
                </div>
              );
            })}
            {isLoading && (
              <div className="chatbot-loading">
                <div className="loading-dot" />
                <div className="loading-dot" />
                <div className="loading-dot" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {isLoggedIn && (
        <div className="chatbot-input-area">
          <form className="chatbot-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="chatbot-input"
              placeholder="Ask about jewelry..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading || !conversationId}
            />
            <button
              type="submit"
              className="chatbot-send"
              disabled={isLoading || !inputValue.trim() || !conversationId}
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;