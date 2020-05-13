import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div>
        <div>
          Social Media Dashboard
          Total Followers: 23,005
        </div>

        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label>
      </div>

      <div>
        <div>Facebook</div>
        <div>Twitter</div>
        <div>Instagram</div>
        <div>Youtube</div>
      </div>
    </div>
  );
}


