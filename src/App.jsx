import Home from "./components/pages/Home";
import AddProduct from "./components/products/AddProduct";
import EditProduct from "./components/products/EditProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
