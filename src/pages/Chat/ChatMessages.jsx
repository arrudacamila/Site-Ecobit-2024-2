import React from 'react';

const ChatMessages = ({ messages }) => {
  return (
    <div className="chat-messages-container">
      {messages.map((message, index) => (
        <div key={index} className={`chat-message ${message.sender}`}>
          <strong>{message.sender}: </strong>{message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
