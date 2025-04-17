import { Link, Outlet } from 'react-router';

export default function Layout() {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link> | <Link to="/basket">Basket</Link>
      </nav>
      <Outlet />
    </div>
  );
}
