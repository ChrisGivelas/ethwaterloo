import React from 'react';

const Message = props => {
  const {src, addr, timestamp, text, className} = props;
  return (
    <p>
      <img className={className} src={src} alt={className} />
      <span className="username">{addr}</span>
      <span className="timestamp">{timestamp}</span>
      <br/>
      <span className="messageText">{text}</span>
    </p>
  );
};

export default Message;
