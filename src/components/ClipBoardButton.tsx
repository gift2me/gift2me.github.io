import './ClipBoardButton.css';
import React, { useState } from 'react';

const ClipboardButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => setCopied(!copied))
      .catch(err => console.error('Failed to copy:', err));
  };

  return (
    <div>
      <button onClick={copyToClipboard} className='button'>
        {copied ? 'Copiado!' : 'Copiar código do QR Code'}
      </button>
    </div>
  );
};



export default ClipboardButton;