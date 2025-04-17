import { useEffect, useState } from 'react';
import '../App.css';

export default function Basket() {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('basket')) || [];
    setBasket(saved);
  }, []);

  const increase = (id) => {
    const updated = basket.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setBasket(updated);
    localStorage.setItem('basket', JSON.stringify(updated));
  };

  const decrease = (id) => {
    const updated = basket
      .map(item =>
        item.id === id ? { ...item, count: Math.max(item.count - 1, 1) } : item
      );
    setBasket(updated);
    localStorage.setItem('basket', JSON.stringify(updated));
  };

  const remove = (id) => {
    const updated = basket.filter(item => item.id !== id);
    setBasket(updated);
    localStorage.setItem('basket', JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>🧺 Basket</h2>
      <div className="grid">
        {basket.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} style={{ height: '180px', objectFit: 'contain' }} />
            <h4>{item.title.slice(0, 40)}...</h4>
            <p>Price: ${item.price}</p>
            <p>Count: {item.count}</p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
              <button onClick={() => increase(item.id)} className="btn-basket">+</button>
              <button onClick={() => decrease(item.id)} className="btn-basket">-</button>
              <button onClick={() => remove(item.id)} className="btn-remove">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
