import React, { Component } from 'react';
import PersonPanel from './PersonPanel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thePerson: [],
      textDisplay: false,
    }
  }

  fetchData() {
    fetch('https://randomuser.me/api?results=25')
    .then(response => response.json())
    .then((thesePerson) => {
      this.setState({
        thePerson: thesePerson.results,
      }, () => {
        console.log(`The people retrieved are ${this.state.thePerson}`);
      });
    });
  }

  toggleButton() {
    this.setState((currentState) => ({
      textDisplay: !currentState.textDisplay, 
  }));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    let thePersonPanel = [];
    for(let i = 0; i < this.state.thePerson.length; i++) {
      thePersonPanel.push(<PersonPanel person={this.state.thePerson[i]} />)
    }
    return (
      <div className='App'>
        {thePersonPanel}
      </div>
    );
  }
}

export default App;
