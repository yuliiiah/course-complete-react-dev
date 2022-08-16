import Card from './card/card.component';

import './cardList.styles.css';

const CardList = ({ chars, charNames }) => {
  return (
    <div className='card-list'>
      {chars.map((char, idx) => {
        return <Card idx={idx} char={char} charNames={charNames} />;
      })}
    </div>
  );
};

export default CardList;
