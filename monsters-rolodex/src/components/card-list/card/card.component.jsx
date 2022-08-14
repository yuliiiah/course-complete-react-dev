import { Component } from 'react';

import './card.styles.css';

class Card extends Component {
  render() {
    const { char, idx, charNames } = this.props;

    const { name, description } = char;

    return (
      <div key={idx} className='card-container'>
        <img
          className='char-icon'
          src={`https://api.genshin.dev/characters/${charNames[idx]}/icon-big`}
          alt={name}
        />

        <h2 className='char-name'>{name}</h2>
        <p className='char-descr'>{description}</p>
      </div>
    );
  }
}

export default Card;
