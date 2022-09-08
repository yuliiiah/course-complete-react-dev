import { DirectoryItemContainer } from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <DirectoryItemContainer>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='directory-body'>
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
