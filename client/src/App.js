import React from 'react';
import axios from 'axios';

import "./App.css";

import PlayerList from './components/PlayerList.js';
import Navbar from './components/Navbar'

class App extends React.Component{

  constructor() {
    super();
    this.state = {
     womenPlayers: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
          console.log(res.data);
          this.setState({
            womenPlayers: res.data
          });
      })
      .catch(err => {
          console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <PlayerList data={this.state.womenPlayers}/>
      </div>
    );
  }
}

export default App;
