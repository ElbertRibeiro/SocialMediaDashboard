import React from 'react';
import './Home.css';
import facebookLogo from '../assets/icon-facebook.svg';
import twitterLogo from '../assets/icon-twitter.svg';
import instagramLogo from '../assets/icon-instagram.svg';
import youtubeLogo from '../assets/icon-youtube.svg';

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Social Media Dashboard</h1>
        <h2>Total Followers: 23,005</h2>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>

      <div>
        <div className="card">
        <h4><img alt="facebookLogo" src={facebookLogo} />  @nathanf</h4>
          <div className="container">
            <h2>1987</h2>
            <h3>Followers</h3>
            <p>2 Today</p>
          </div>
        </div>

        <div className="card">
          <h4><img alt="twitterLogo" src={twitterLogo} />  @nathanf</h4>
          <div className="container">
            <h2>1044</h2>
            <h3>Followers</h3>
            <p>99 Today</p>
          </div>
        </div>

        <div className="card">
          <h4><img alt="instagramLogo" src={instagramLogo} />  @realnathanf</h4>
          <div className="container">
            <h2>11k</h2>
            <h3>Followers</h3>
            <p>1099 Today</p>
          </div>
        </div>

        <div className="card">
          <h4><img alt="youtubeLogo" src={youtubeLogo} />  Nathan F.</h4>
          <div className="container">
            <h2>8239</h2>
            <h3>Subscribers</h3>
            <p>144 Today</p>
          </div>
        </div>
      </div>

      <div>
        <h2>Overview - Today</h2>

        <div>
          <h4>Pages Views <img alt="facebookLogo" src={facebookLogo}/></h4>
          <p>87</p>
        </div>

        <div>
          <h4>Likes <img alt="facebookLogo" src={facebookLogo}/></h4>
          <p>52</p>
        </div>

        <div>
          <h4>Pages Views <img alt="instagramLogo" src={instagramLogo}/></h4>
          <p>87</p>
        </div>

        <div>
          <h4>Likes <img alt="instragramLogo" src={instagramLogo}/></h4>
          <p>52</p>
        </div>


      </div>




    </div>
  );
}


