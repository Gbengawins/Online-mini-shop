import './App.css';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
// import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/" exact element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
