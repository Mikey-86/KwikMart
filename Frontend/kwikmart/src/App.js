import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import AdminCreate from "./pages/AdminCreate";
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/signup';
import Cart from './components/Cart/Cart';
import CreateProduct from './components/CreateProduct/CreateProduct';
import AdminProduct from './components/AdminProductList/AdminProductList';
import EditProduct from './components/EditProducts/EditProducts';
import Products from './pages/Products';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/adminCreate" element={<CreateProduct />} />
        <Route exact path="/adminProducts" element={<AdminProduct />} />
        //For edit of AdminProductList
        <Route exact path="/edit/:id" element={<EditProduct />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
