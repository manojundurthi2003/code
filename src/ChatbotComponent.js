import React, { useEffect, useState } from "react";

const ChatbotComponent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const loadedScripts = document.querySelectorAll(
      'script[src="https://www.chatbase.co/embed.min.js"]'
    );
    console.log("Loaded Scripts:", loadedScripts.length);
  
    if (loadedScripts.length === 0) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.async = true;
      script.defer = true;
      script.setAttribute("chatbotId", "6qAzQ7aAr3xVwh0atTKWm");
      script.setAttribute("domain", "www.chatbase.co");
  
      script.onload = () => {
        console.log("Chatbot script loaded successfully.");
      };
  
      script.onerror = (e) => {
        console.error("Error loading the Chatbot script:", e);
      };
  
      document.body.appendChild(script);
    } else {
      console.log("Chatbot script already loaded.");
    }
  }, []);  

  return (
    <>
      {/* Chatbot Iframe */}
      {isChatOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "400px",
            height: "500px",
            minHeight: "300px",
            zIndex: 1000,
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
          }}
        >
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/6qAzQ7aAr3xVwh0atTKWm"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Chatbot"
            style={{
              borderRadius: "10px",
            }}
          ></iframe>

          {/* Close button */}
          <button
            onClick={() => setIsChatOpen(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default ChatbotComponent;