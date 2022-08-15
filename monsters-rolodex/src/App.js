import { useState } from 'react';

import CardList from './components/card-list/cardList.component';
import SearchBox from './components/search-box/searchBox.component';
import './App.css';

const API_CHAR_NAMES = 'https://api.genshin.dev/characters';
const API_CHAR_OBJS = 'https://api.genshin.dev/characters/all';

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <SearchBox
        className='chars-search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search characters'
      />
      {/* <CardList chars={filteredChars} charNames={filteredCharNames} /> */}
    </div>
  );
};

// class AppClass extends Component {
//   constructor() {
//     super();

//     this.state = {
//       charList: [],
//       charNames: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     this.getCharacters();
//     this.getCharNames();
//   }

//   getCharacters() {
//     fetch(API_CHAR_OBJS)
//       .then((response) => response.json())
//       .then((chars) => {
//         const filteredCharObjs = chars.filter(
//           (char) =>
//             !char.name.toLowerCase().includes('thoma') &&
//             !char.name.toLowerCase().includes('traveler')
//         );

//         this.setState(() => {
//           return { charList: filteredCharObjs };
//         });
//       });
//   }

//   getCharNames() {
//     fetch(API_CHAR_NAMES)
//       .then((response) => response.json())
//       .then((charNames) => {
//         const filteredCharNames = charNames.filter(
//           (name) => !name.includes('thoma') && !name.includes('traveler')
//         );

//         this.setState(() => {
//           return { charNames: filteredCharNames };
//         });
//       });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { onSearchChange } = this;
//     const { charList, charNames, searchField } = this.state;

//     const filteredChars = charList.filter((char) =>
//       char.name.toLowerCase().startsWith(searchField)
//     );

//     const filteredCharNames = charNames.filter((charName) =>
//       charName.startsWith(searchField)
//     );

//     console.log(filteredChars);
//     console.log(filteredCharNames);

//     return (
//       <div className='App'>
//         <SearchBox
//           className='chars-search-box'
//           onChangeHandler={onSearchChange}
//           placeholder='Search characters'
//         />
//         <CardList chars={filteredChars} charNames={filteredCharNames} />
//       </div>
//     );
//   }
// }

export default App;
