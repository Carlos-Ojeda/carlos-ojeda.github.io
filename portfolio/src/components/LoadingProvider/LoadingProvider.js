import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import './_loading-provider.scss';

const LoadingProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simple timeout to ensure everything is loaded
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <div className="loading-container">
        <Spin size="large" />
        <p>Loading...</p>
      </div>
    );
  }

  return children;
};

export default LoadingProvider;
