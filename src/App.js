import React, { Component } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <div className="search">
            <input type="text" placeholder="Enter Searchterm" />
            <button>Search</button>
          </div>
          <SearchResults />
        </div>
      </div>
    );
  }
}

export default App;
