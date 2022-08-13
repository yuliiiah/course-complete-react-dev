import { Component } from 'react';

import './App.css';

const GENSHIN_API = 'https://api.genshin.dev/characters/';

class App extends Component {
  constructor() {
    super();

    this.state = {
      charList: [],
      searchField: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch(GENSHIN_API)
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
    console.log('render');

    const filteredChars = this.state.charList.filter((char) =>
      char.toLocaleLowerCase().startsWith(this.state.searchField)
    );

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search Genshin chars'
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredChars.map((char) => {
          return (
            <div key={char}>
              <h1>{char[0].toUpperCase() + char.slice(1)}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
