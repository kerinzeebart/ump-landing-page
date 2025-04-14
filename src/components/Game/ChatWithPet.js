import React, { useState, useEffect, useRef } from 'react';
import './ChatWithPet.css';

const ChatWithPet = ({ petName, petType, onSendMessage }) => {
  const [messages, setMessages] = useState([
    { sender: 'system', text: `Welcome to your chat with ${petName}!` },
    { sender: 'pet', text: `*${petName} looks at you curiously*` }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Generate pet response based on message content
  const generatePetResponse = (message) => {
    // Simple keyword-based responses
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return `*${petName} meows happily in greeting*`;
    } else if (lowerMessage.includes('play')) {
      return `*${petName} gets excited and ready to play*`;
    } else if (lowerMessage.includes('food') || lowerMessage.includes('hungry') || lowerMessage.includes('eat')) {
      return `*${petName} perks up at the mention of food*`;
    } else if (lowerMessage.includes('sleep') || lowerMessage.includes('tired')) {
      return `*${petName} yawns and stretches*`;
    } else if (lowerMessage.includes('pet') || lowerMessage.includes('stroke') || lowerMessage.includes('cuddle')) {
      return `*${petName} purrs contentedly*`;
    } else if (lowerMessage.includes('good') || lowerMessage.includes('nice') || lowerMessage.includes('love')) {
      return `*${petName} rubs against your leg affectionately*`;
    } else {
      // Random responses for other messages
      const randomResponses = [
        `*${petName} tilts head curiously*`,
        `*${petName} blinks slowly at you*`,
        `*${petName} makes a soft meow*`,
        `*${petName} watches you attentively*`,
        `*${petName} playfully paws at something invisible*`
      ];
      return randomResponses[Math.floor(Math.random() * randomResponses.length)];
    }
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    
    // Generate pet response
    setTimeout(() => {
      const petResponse = generatePetResponse(input);
      setMessages(prev => [...prev, { sender: 'pet', text: petResponse }]);
      
      // Notify parent component about the interaction
      if (onSendMessage) {
        onSendMessage(input, petResponse);
      }
    }, 1000);
    
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>Chat with {petName}</h3>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.sender === 'pet' ? (
              <div className="pet-message">
                <div className="pet-avatar">
                  {petType === 'cat' && '🐱'}
                  {petType === 'dog' && '🐶'}
                  {petType === 'dragon' && '🐉'}
                  {petType === 'chicken' && '🐔'}
                </div>
                <div className="message-text">{msg.text}</div>
              </div>
            ) : (
              <div className="message-text">
                {msg.sender === 'system' ? (
                  <span className="system-message">{msg.text}</span>
                ) : (
                  msg.text
                )}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={`Say something to ${petName}...`}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWithPet;
