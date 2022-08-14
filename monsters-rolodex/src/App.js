import { Component } from 'react';

import CardList from './components/card-list/cardList.component';
import './App.css';

const API_CHARS = 'https://api.genshin.dev/characters/all';

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
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { onSearchChange } = this;
    const { charList, searchField } = this.state;

    const filteredChars = charList.filter((char) =>
      char.name.toLowerCase().startsWith(searchField)
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
        {/* {filteredChars.map((char, idx) => (
          <h1 key={idx}>{char.name}</h1>
        ))} */}
      </div>
    );
  }
}

export default App;
