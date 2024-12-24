"use client"; // For client-side rendering

import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import styles from "./Chatbot.module.css";

// Initialize the AI model
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error('NEXT_PUBLIC_GEMINI_API_KEY is not defined');
}
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "tunedModels/bhutlegemini-cnx3eko9qkky",
});

const generationConfig = {
  temperature: 0.2,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // To toggle chat window
  const [inputMessage, setInputMessage] = useState(""); // User input
  const [chatHistory, setChatHistory] = useState([{role:"user", text : "Your question here"}]); // To store conversation history
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newHistory = [
      ...chatHistory,
      { role: "user", text: inputMessage }, // Add user's message
    ];

    setChatHistory(newHistory); // Update chat history locally
    setInputMessage(""); // Clear input field
    setIsLoading(true); // Show typing indicator

    try {
      // Start the chat session and include the entire history
      const chatSession = model.startChat({
        generationConfig,
        history: newHistory.map((msg) => ({
          role: msg.role,
          parts: [{ text: msg.text }],
        })),
      });

      const result = await chatSession.sendMessage(inputMessage);
      const aiResponse = result.response.text();

      setChatHistory([
        ...newHistory,
        { role: "model", text: aiResponse }, // Append AI's response
      ]);
    } catch (error) {
      console.error("Error in chatbot:", error);
      setChatHistory([
        ...newHistory,
        { role: "model", text: "Sorry, something went wrong. Please try again later." },
      ]);
    } finally {
      setIsLoading(false); // Remove typing indicator
    }
  };

  return (
    <>
      {!isOpen ? (
        <div className={styles.chatCircle} onClick={toggleChat}>
          💬
        </div>
      ) : (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span>Chat Assistant</span>
            <button className={styles.closeButton} onClick={toggleChat}>
              &minus;
            </button>
          </div>
          <div className={styles.chatBody}>
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user" ? styles.userMessage : styles.modelMessage
                }
              >
                {message.text}
              </div>
            ))}
            {isLoading && <div className={styles.loading}>Typing...</div>}
          </div>
          <div className={styles.chatFooter}>
            <textarea
              className={styles.chatInput}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message here..."
            ></textarea>
            <button className={styles.sendButton} onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
