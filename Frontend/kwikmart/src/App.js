import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import AdminCreate from "./pages/AdminCreate";
import Navbar from './components/Navbar/Navbar';
import CreateProduct from './components/CreateProduct/CreateProduct';
import Products from './pages/Products';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/adminCreate" element={<AdminCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
