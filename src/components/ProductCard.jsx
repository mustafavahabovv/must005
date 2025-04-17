import { useEffect, useState } from 'react';

export default function ProductCard({ product }) {
  const [favorites, setFavorites] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
    setBasket(JSON.parse(localStorage.getItem('basket')) || []);
  }, []);

  const updateLocal = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const toggleFavorite = () => {
    let updated = favorites.find(p => p.id === product.id)
      ? favorites.filter(p => p.id !== product.id)
      : [...favorites, product];
    setFavorites(updated);
    updateLocal('favorites', updated);
  };

  const toggleBasket = () => {
    let updated = basket.find(p => p.id === product.id)
      ? basket.filter(p => p.id !== product.id)
      : [...basket, { ...product, count: 1 }];
    setBasket(updated);
    updateLocal('basket', updated);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.title} style={{ height: '180px', objectFit: 'contain' }} />
      <h4>{product.title.slice(0, 40)}...</h4>
      <p>${product.price}</p>
      <button className="btn-fav" onClick={toggleFavorite}>
        {favorites.find(p => p.id === product.id) ? '★ Remove Favorite' : '☆ Add to Favorite'}
      </button>
      <button className="btn-basket" onClick={toggleBasket}>
        {basket.find(p => p.id === product.id) ? 'Remove from Basket' : 'Add to Basket'}
      </button>
    </div>
  );
}
