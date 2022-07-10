import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {
  return(
    <div className='category-preview-container'>
      <h2>
        <span className='title'>{`${title.slice(0,1).toUpperCase()}${title.slice(1)}`}</span>
      </h2>
      <div className='preview'>
        {
          products.filter((_, idx) => idx < 4).map((product) => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </div>
  );
};

export default CategoryPreview;