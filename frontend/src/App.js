import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Cart from "./pages/Cart";



function App() {

  return (
    <>
      <Router>
      <Header />
        <div className="container"> 
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/product/:id' element={<Product />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>

        </div>
      <Footer />
      </Router>
    </>
  );
}

export default App;
