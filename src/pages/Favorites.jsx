import { useEffect, useState } from 'react';
import '../App.css';

export default function Favorite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(saved);
  }, []);

  const remove = (id) => {
    const updated = favorites.filter(item => item.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>❤️ Favorites</h2>
      {favorites.length === 0 ? (
        <p>Favoritə əlavə edilmiş məhsul yoxdur.</p>
      ) : (
        <div className="grid">
          {favorites.map(item => (
            <div key={item.id} className="card">
              <img
                src={item.image}
                alt={item.title}
                style={{ height: '180px', objectFit: 'contain' }}
              />
              <h4>{item.title.slice(0, 40)}...</h4>
              <p>${item.price}</p>
              <button onClick={() => remove(item.id)} className="btn-remove">
                ❌ Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
