import React from 'react';
import logo from './logo.svg';
import './App.css';
import MediaCard from './MediaCard';
import Gate from './Gate';
function App() {
  return (
    <div className = "App">
      <header className = "App-header">
        <h1>React Tutorial Exercises</h1>
      </header>
      <main>
        <article>
          <p>My name is <strong>Ahmed Bashir</strong>. I am from Gujrat. My age is {20 + 7}. I am a keen learner.</p>
          <h2>Qualification</h2>
          <ul style = {{listStyle : 'none'}} >
            <li>MS(CS) Computer Science - Research topic: Intelligent Web Crawling using Reinforcement Learning for RIAs <strong>(In Progress)</strong></li>
            <li>BS(Hons.) Computer Science - GIFT University, Gujranwala</li>
          </ul>
        </article>
        <article>
          <h2>Media Card Component</h2>
          <MediaCard title = "John Doe" body = {<strong>John Doe's Card</strong>} imageUrl = "https://via.placeholder.com/150"/>
        </article>
        <article>
          <h2>Gate Component</h2>
            <Gate isOpen = {true}/>
            
        </article>
      </main>

    </div>
  );
}

export default App;
