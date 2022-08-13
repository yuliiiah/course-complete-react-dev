import { Component } from 'react';

import CardList from './components/card-list/cardList.component';
import './App.css';

const API_CHARS = 'https://api.genshin.dev/characters/';
// const API_CHAR_CARDS = `https://api.genshin.dev/characters/${char}/card`;

class App extends Component {
  constructor() {
    console.log('constructor');

    super();

    this.state = {
      charList: [],
      searchField: '',
    };
  }

  componentDidMount() {
    console.log('componentDidMount');

    fetch(API_CHARS)
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log('render');

    const { onSearchChange } = this;
    const { charList, searchField } = this.state;

    const filteredChars = charList.filter((char) =>
      char.toLocaleLowerCase().startsWith(searchField)
    );

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search Genshin chars'
          onChange={onSearchChange}
        />
        {/* {filteredChars.map((char) => {
          return (
            <div key={char}>
              <h1>{char[0].toUpperCase() + char.slice(1)}</h1>
            </div>
          );
        })} */}
        <CardList />
      </div>
    );
  }
}

export default App;
