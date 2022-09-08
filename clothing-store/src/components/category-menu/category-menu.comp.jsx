import DirectoryItem from '../directory-item/directory-item.comp';

import './category-menu.styles.scss';

const CategoryMenu = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;
