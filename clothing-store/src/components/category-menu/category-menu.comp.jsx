import DirectoryItem from '../directory-item/directory-item.comp';

import { CategoriesContainer } from './category-menu.styles';

const CategoryMenu = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default CategoryMenu;
