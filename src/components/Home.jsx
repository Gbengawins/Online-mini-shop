import { useGetAllProductsQuery } from '../slices/productsApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const handleAddToCart = (product) => { 
    
    dispatch(addToCart(product));
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An Error occurred</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{ product.name }</h3>
                <img src={ product.image } alt={ product.name } />
                <div className="details">
                  <span>{ product.desc }</span>
                  <span className='price'>${ product.price }</span>
                  <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home