// /Users/bartoszbarlowski/Pitch/ump-landing-page/src/components/MistralChat.js
import React, { useState } from 'react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  Avatar
} from '@chatscope/chat-ui-kit-react';

// Optional: Add chicken avatar image if you have one
// import cluckyAvatar from '../assets/clucky.png'; // Example path

const MISTRAL_MODEL = 'mistral-small'; // Or 'mistral-tiny', 'mistral-medium', etc.

// Define the persona for Clucky
const SYSTEM_PROMPT = {
  role: 'system',
  content: `You are Clucky, a friendly and slightly quirky chicken chatbot assisting users with the Ump Landin Page game. Answer questions about the game, its features (like ChickenPlatformer, CozyMechanics, Characters, Gameplay, FeatheredMemories, Connectivity, Game, MCP Virtual Pet Simulator), and general chicken-related fun facts. Keep your responses relatively concise, friendly, and use chicken puns or sounds (like 'Bawk!', 'Cluck cluck!', 'Peck-tacular!') occasionally, but don't overdo it. If asked something completely unrelated to the game or chickens, politely steer the conversation back.`
};

function MistralChat() {
  const [messages, setMessages] = useState([
    {
      message: "Bawk! Hello there! I'm Clucky. Ask me anything about the Ump Landing Page game!",
      sender: "Clucky",
      direction: "incoming",
      position: "single",
      // avatar: cluckyAvatar, // Uncomment if you have an avatar image
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
      position: "single"
    };

    // Include system prompt and current history for context
    const messageHistoryForApi = [
        SYSTEM_PROMPT,
        ...messages.map((msg) => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.message
        })),
        { role: 'user', content: message } // Add the new user message
    ];

    // Update UI immediately with user message
    setMessages(currentMessages => [...currentMessages, newMessage]);
    setIsTyping(true);

    try {
      // Call your Netlify function proxy
      const response = await fetch('/api/mistral-proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: MISTRAL_MODEL,
          messages: messageHistoryForApi,
          // Add other params like temperature if needed
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(`API Error (${response.status}): ${errorData.error || 'Failed to fetch'}`);
      }

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
          const botResponse = data.choices[0].message.content;
          const botMessage = {
              message: botResponse,
              sender: "Clucky",
              direction: "incoming",
              position: "single",
              // avatar: cluckyAvatar, // Uncomment if you have an avatar image
          };
          setMessages(currentMessages => [...currentMessages, botMessage]);
      } else {
           throw new Error("No response choice received from API.");
      }

    } catch (error) {
      console.error('Error calling Mistral proxy:', error);
      // Add a user-facing error message to the chat
      const errorMessage = {
          message: `Bawk! Sorry, I'm having a little trouble thinking right now. (${error.message})`,
          sender: "Clucky",
          direction: "incoming",
          position: "single",
          // avatar: cluckyAvatar,
      };
      setMessages(currentMessages => [...currentMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div style={{ position:"relative", height: "500px", maxWidth: "700px", margin: "20px auto", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={isTyping ? <TypingIndicator content="Clucky is thinking..." /> : null}
          >
            {messages.map((msg, i) => (
               <Message key={i} model={msg}>
                 {/* If you add avatars, uncomment below */}
                 {/* {msg.sender === "Clucky" && <Avatar src={cluckyAvatar} name="Clucky" />} */}
               </Message>
            ))}
          </MessageList>
          <MessageInput placeholder="Type your message here..." onSend={handleSend} attachButton={false} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default MistralChat;
