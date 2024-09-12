import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { About } from './About';
import { Home } from './Home';
import { NavBar } from './NavBar';
import { OrderSummary } from './OrderSummary';

function App() {
  return (
    <BrowserRouter> {/* BrowserRouter should wrap everything that uses routing */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


