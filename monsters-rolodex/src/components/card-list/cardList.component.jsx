import { Component } from 'react';

class CardList extends Component {
  render() {
    // console.log('render');

    const { chars } = this.props;

    return (
      <div>
        {chars.map((char, idx) => (
          <h1 key={idx}>{char.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
