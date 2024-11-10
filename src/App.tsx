import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchNeoData } from './api/nasaApi';
import { processNeoData } from './utils/dataProcessor';

function App() {
  useEffect(() => {
    const getNeoData = async () => {
      try {
        const data = await fetchNeoData()
        const processedData = processNeoData(data)
        console.log('processedData', processedData)
      } catch (err: any) {
        console.error(err.message)
      } 
    }

    getNeoData()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
