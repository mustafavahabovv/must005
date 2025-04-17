import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../App.css';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h2 style={{ marginBottom: '1rem' }}>🛍️ New Arrivals</h2>
      <div className="grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
