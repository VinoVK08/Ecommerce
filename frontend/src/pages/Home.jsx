// import { IconContext } from "react-icons";
// import { BsFillChatDotsFill , BsFillHandThumbsUpFill} from "react-icons/bs";
import "./home.css"
import axios from '../axios'
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { CartContext, CartDispatchContext } from '../context/productContext';

function Home() {

  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  const cart = useContext(CartContext);
  const setCart = useContext(CartDispatchContext);

  const handleClick = (item) => {
      item.amount = 1
      if (cart.indexOf(item) !== -1) return;
      setCart([...cart, item]);
      navigate("/cart")
  };
  
  useEffect(() => {
    axios.get("/product").then((res)=>{
    setProduct(res.data) 
  }).catch((error) => {
    console.log(error.response.data)
  })}, [])

  return (
      <section style={{ background_color: "#eee" }}>
  <div className="container py-5">
    <div className="row">
    {product.map((item, i) => (
      <div className="col-md-12 col-lg-4 mb-4 mb-lg-0" key={i}>
        <div className="card" style={{ margin: "20px"}}>
          <div className="d-flex justify-content-between p-3 align-items-center">
          <p className="text-muted mb-0">Available: <span className="fw-bold">{item.available}</span></p>
            <div
              className="bg-dark d-flex align-items-center justify-content-center shadow-1-strong"
              style={{ borderRadius: "5px", padding:"10px", fontWeight: "bold" }}>
              <p className="text-white mb-0 large">{item.category}</p>
            </div>
          </div>
          <img src={item.img}
            className="card-img-top" alt="Laptop" />
          <div className="card-body">

            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">{item.title}</h5>
              <h5 className="text-dark mb-0">Rs. {item.price}</h5>
            </div>

            <div className="d-flex justify-content-between mb-2" style={{ marginTop: "20px"}}>
            <button type="button" className="w-100 btn btn-outline-dark" onClick={() => handleClick(item)}>Add to cart</button>
              <Link to={`/product/${item._id}`}><button type="button" className="w-100 btn btn-dark">View Product</button></Link>
            </div>
          </div>
        </div>
      </div>
      ))}

    </div>
  </div>
</section>

  )
}

export default Home