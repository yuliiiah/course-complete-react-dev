import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '1342jfslkjfalw322risafjl',
        },
        {
          name: 'Frank',
          id: 'oqwurjfkdznf832r89ru10ur',
        },
        {
          name: 'Jacky',
          id: 'iasljf289ru8qurq23hrnfjk',
        },
        {
          name: 'Yuliia',
          id: 'iajksnfiuq4r8uq298uiwqun',
        },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
