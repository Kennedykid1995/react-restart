import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <a className="nav-item">Todo</a>
        <a className="nav-item">Calculator</a>
      </div>
      <div className="todo-box">
        <input placeholder="todo item" />
        <button>add</button>
      </div>
    </div>
  );
}

export default App;
