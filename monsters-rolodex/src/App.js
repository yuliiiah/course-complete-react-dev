import { useState, useEffect } from 'react';

import CardList from './components/card-list/cardList.component';
import SearchBox from './components/search-box/searchBox.component';
import './App.css';

const API_CHAR_NAMES = 'https://api.genshin.dev/characters';
const API_CHAR_OBJS = 'https://api.genshin.dev/characters/all';

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [charList, setCharList] = useState([]);
  const [charNames, setCharNames] = useState([]);
  const [filteredChars, setFilteredChars] = useState(charList);
  const [filteredCharNames, setFilteredCharNames] = useState(charNames);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch(API_CHAR_OBJS)
      .then((response) => response.json())
      .then((chars) => {
        const filteredCharObjs = chars.filter(
          (char) =>
            !char.name.toLowerCase().includes('thoma') &&
            !char.name.toLowerCase().includes('traveler')
        );

        setCharList(filteredCharObjs);
      });
  }, []);

  useEffect(() => {
    fetch(API_CHAR_NAMES)
      .then((response) => response.json())
      .then((charNames) => {
        const filteredCharNames = charNames.filter(
          (name) => !name.includes('thoma') && !name.includes('traveler')
        );

        setCharNames(filteredCharNames);
      });
  }, []);

  useEffect(() => {
    const newFilteredChars = charList.filter((char) =>
      char.name.toLowerCase().startsWith(searchField)
    );

    setFilteredChars(newFilteredChars);
  }, [charList, searchField]);

  useEffect(() => {
    const newFilteredCharNames = charNames.filter((charName) =>
      charName.startsWith(searchField)
    );

    setFilteredCharNames(newFilteredCharNames);
  }, [charNames, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setTitle(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        className='chars-search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search characters'
      />
      <SearchBox
        className='title-search-box'
        onChangeHandler={onTitleChange}
        placeholder='Change title'
      />
      <CardList chars={filteredChars} charNames={filteredCharNames} />
    </div>
  );
};

export default App;
