import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "jsh",
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            data: result.data,
          });
        }
      )
  }

  render() {
    const { data, isLoaded } = this.state;
    


      return (

        <div className="App">

          <h1>{data}</h1>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
        </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
        </a>
          </header>
        </div>
      )
    }
  
}

export default App;
