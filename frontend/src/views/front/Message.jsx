import React from 'react';

const Message = props => {
  const {src, addr, timestamp, text, className} = props;
  return (
    <p>
      <img className="user1" src={src} alt={className} />
      <span className="username">{addr || "0x005b661B34Cb13E4023A26048eB6440a9e1d611B"}</span>
      <span className="timestamp">{timestamp.toString()}</span>
      <br/>
      <span className="messageText">{text}</span>
    </p>
  );
};

export default Message;
