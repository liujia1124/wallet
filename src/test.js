import React, { useState, useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner'; // 引入加载器组件
 
function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    // 模拟异步操作
    setTimeout(() => {
      setData('Loaded Data');
      setLoading(false);
    }, 2000);
  }, []);
 
  return (
    <div>
      {loading ? <BallTriangle color="#00BFFF" height={100} width={100} /> : <div>{data}</div>}
    </div>
  );
}