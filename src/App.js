import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserList from "./Users/UserList";
import UserPage from "./Users/userPage";
import ProductList from "./Products/ProductList";
import ProductPage from "./Products/ProductPage";
import NavBar from "./Components/NavBar";
import WithCarousel from "./Products/WithCarousel";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App-header">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<UserList />} />
        <Route path="/userPage/:id" element={<UserPage />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route path="/productPage/:id" element={<ProductPage />} />
        <Route path="/carousel" element={<WithCarousel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
