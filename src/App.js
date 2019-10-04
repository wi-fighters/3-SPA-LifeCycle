import React, { Component } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import './App.scss';

class App extends Component {
  
  state = {
    searchTerm: '',
    lastSearchTerm: ''
  }
  
  handleOnChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleOnClick = () => {
    this.setState({
      lastSearchTerm: this.state.searchTerm
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <div className="search">
            <input type="text" 
                   placeholder="Enter Searchterm" 
                   value={this.state.searchTerm} 
                   onChange={this.handleOnChange} 
            />
            <button onClick={this.handleOnClick}>Search</button>
          </div>
          <SearchResults searchFor={this.state.lastSearchTerm} />
        </div>
      </div>
    );
  }
}

export default App;
