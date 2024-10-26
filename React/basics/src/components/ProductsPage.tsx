// ProductsPage.tsx
import ProductsWrapper from './ProductsWrapper';
import ShoeType from './ShoeType';
import ShoeDetails from './ShoeDetails';
import image from  '../assets/images/image.png'
const ProductsPage = () => {
  return (
    <div className="products-page">
      <ProductsWrapper>
        <ShoeType
          imageUrl={image}
          shoeName="Air Force 1"
        />
        <ShoeDetails
          description="A comfortable pair of sneakers designed for everyday wear."
          price={45.95}
          sizes={[40, 41, 42, 43, 44, 45]}
          colors={['#000000', '#ff9900', '#00aaff', '#ffc0cb']}
        />
      </ProductsWrapper>
    </div>
  );
};

export default ProductsPage;