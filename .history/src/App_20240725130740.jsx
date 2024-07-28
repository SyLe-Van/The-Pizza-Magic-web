import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import CreateOrder from './CreateOrder';
import Order from './Order';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/new" element={<CreateOrder />} />
        <Route path="/order/:orderId" element={<Order />} />
      </Routes>
    </Router>
  );
}