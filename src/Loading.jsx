// Loading.jsx
import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p className="loading-text">正在加载...</p>
    </div>
  );
};

export default Loading;
