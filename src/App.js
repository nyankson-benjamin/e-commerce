import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./Products/ProductList";
import ProductPage from "./Products/ProductPage";
import NavBar from "./Components/NavBar";
import WithCarousel from "./Products/WithCarousel";
import Footer from "./Components/Footer";
import Cart from "./Products/Cart";
import Purchase from "./Products/Purchase";

function App() {
  return (
    <div className="App-header">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/productPage/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchase/:id" element={<Purchase />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
