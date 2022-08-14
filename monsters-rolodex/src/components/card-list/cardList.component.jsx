import { Component } from 'react';
import Card from './card/card.component';

import './cardList.styles.css';

class CardList extends Component {
  render() {
    const { chars, charNames } = this.props;

    return (
      <div className='card-list'>
        {chars.map((char, idx) => {
          return <Card idx={idx} char={char} charNames={charNames} />;
        })}
      </div>
    );
  }
}

export default CardList;
