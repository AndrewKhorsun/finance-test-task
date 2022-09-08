import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io("http://localhost:4000", {});

function App() {
  const [isConnected] = useState(socket.connected);
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', function(response) {
        const res = Array.isArray(response) ? response : [response];
        // const json = res.map(item => JSON.stringify(item)).join('\n');
        setData(res)
    });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>{JSON.stringify(data[0]) }</p>
          <p>Connected: {'' + isConnected}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
