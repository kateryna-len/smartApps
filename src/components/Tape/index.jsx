import React from 'react';
import feed_icon from '../../assets/feed.png';
import './style.css';

export default function Tape() {
  return (
    <div>
      <img src={feed_icon} alt="feed" className="img_feed" />
    </div>
  );
}
