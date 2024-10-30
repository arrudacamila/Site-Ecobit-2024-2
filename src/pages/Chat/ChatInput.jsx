import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue(''); // Limpa o campo de entrada após enviar a mensagem
    }
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite sua mensagem..."
      />
      <button onClick={handleSend}>Enviar</button>
    </div>
  );
};

export default ChatInput;
