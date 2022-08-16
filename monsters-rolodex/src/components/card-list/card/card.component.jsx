import './card.styles.css';

const Card = ({ char, idx, charNames }) => {
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
};

export default Card;
