import  { useState } from 'react';
import useSWR from 'swr';
import ShoppingCart from './cart'; // Adjust the path based on your project structure

const Home = () => {
  const { data: products, error } = useSWR('https://fakestoreapi.com/products', async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const Store = ({ cart, removeFromCart }) => (
    <div className='flex justify-center'>
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );

  if (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading data</div>;
  }

  const filteredProducts = products
    ? products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const Product = () => {
    if (!products) {
      return <div>Loading...</div>;
    }

    return (
      <ul className='md:grid grid-cols-3 gap-4 w-[1000px] grid-rows-1 m-10'>
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className='md:p-2 rounded-lg border-solid border-2 black my-5 p-4 bg-green-100'
          >
            <div>
              <img src={product.image} alt={product.title} className='w-full h-[300px] rounded-lg' />
            </div>
            <p className='my-2'>{product.title}</p>
            <div className='flex items-end justify-between py-4'>
              <span className='text-3xl font-bold text-gray-900 dark:text-white'>${product.price}</span>
              <button
                onClick={() => addToCart(product)}
                className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Add to cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div className='flex justify-center my-4'>
        <input
          type='text'
          placeholder='Search products...'
          value={searchQuery}
          onChange={handleSearchChange}
          className='p-2 border rounded-md w-1/3'
        />
      </div>
      <div className='flex justify-center'>
        <Product />
      </div>
      <Store cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export const Store = ({ cart, removeFromCart }) => (
  <div className='flex justify-center'>
    <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
  </div>
);
export default Home;

