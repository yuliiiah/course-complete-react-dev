import { Component } from 'react';

class CardList extends Component {
  render() {
    console.log('render');

    const { chars } = this.props;

    return (
      <div>
        {chars.map((char) => (
          <h1 key={char}>{char}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
