import React, { Component } from 'react';
import './App.css';
import Categories from './components/Categories.js';
import Posts from './components/Posts.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readable</h1>
        </header>
        <section>
          <Categories />
        </section>
        <section>
          <Posts />
        </section>
      </div>
    );
  }
}

export default App;