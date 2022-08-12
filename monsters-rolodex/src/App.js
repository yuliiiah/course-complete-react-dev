import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      charList: [],
    };
  }

  componentDidMount() {
    fetch('https://api.genshin.dev/characters')
      .then((response) => response.json())
      .then(
        (chars) =>
          this.setState(() => {
            return { charList: chars };
          }),
        () => {
          console.log(this.state.charList);
        }
      );
  }

  render() {
    return (
      <div className='App'>
        {this.state.charList.map((char) => {
          return (
            <div key={char}>
              <h1>{char.toUpperCase()}</h1>
              <img src={char.card} alt={char} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
