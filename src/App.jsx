import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Blog from "./pages/Blog"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import Header from "./component/Header"

function App() {


  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/home" element={<Layout />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/*" element={<Product />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
