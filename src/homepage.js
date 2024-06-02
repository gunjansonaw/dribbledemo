import React from 'react';
import './homepage.css';
import logo from './assets/dribble.jpg'; 

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <img src={logo} alt="Dribbble Logo" className="logo" />
        <nav className="navigation">
          <a href="#find-talent">Find talent</a>
          <a href="#inspiration">Inspiration</a>
          <a href="#learn-design">Learn design</a>
          <a href="#jobs">Jobs</a>
          <a href="#go-pro">Go Pro</a>
        </nav>
        <div className="auth-buttons">
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
        </div>
      </header>
      <main className="main-content">
        <div className="highlight-text">Over 3 million ready-to-work creatives!</div>
        <h1 className="main-heading">Work with the world’s top <br />creative talent.</h1>
        <p className="main-subheading">Connect with millions of top-rated designers & agencies around the world.</p>
        <button className="cta-button">Start hiring today</button>
      </main>
    </div>
  );
};

export default HomePage;
