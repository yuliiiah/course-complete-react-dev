import { Component } from 'react';

import CardList from './components/card-list/cardList.component';
import './App.css';

const API_CHARS = 'https://api.genshin.dev/characters/';
// const API_CHAR_CARDS = `https://api.genshin.dev/characters/${char}/card`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      charList: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch(API_CHARS)
      .then((response) => response.json())
      .then((chars) =>
        this.setState(() => {
          return { charList: chars };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
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
        <CardList chars={filteredChars} />
      </div>
    );
  }
}

export default App;
