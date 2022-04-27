import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from '../axios'
import { useContext, useEffect, useState } from "react";
import "./product.css"
import "./data.js"
import { CartContext, CartDispatchContext } from '../context/productContext';
function Product() {
   
    const params = useParams();
    const navigate = useNavigate();

    const cart = useContext(CartContext);
    const setCart = useContext(CartDispatchContext);

    const [product, setProduct] = useState([]);


    const handleClick = (item) => {
        item.amount = 1
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item]);
        navigate("/cart")
    };

    useEffect(() => {
      axios.get(`/product/${params.id}`).then((res)=>{
      setProduct(res.data) 
    }).catch((error) => {
      console.log(error.response.data)
    })}, [])

  return (

    <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="row">
                    <div class="col-md-6">
                        <div class="images p-3">
                            <div class="text-center p-4"> <img id="main-image" src={product.img} /> </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product p-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span class="ml-1">Back</span> </div> <i class="fa fa-shopping-cart text-muted"></i>
                            </div>
                            <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">{product.category}</span>
                                <h5 class="text-uppercase">{product.title}</h5>
                                <div class="price d-flex flex-row align-items-center"> 
                                    <span class="act-price">Rs. {product.price}</span>
                                </div>
                            </div>
                            <p class="about">{product.desc}</p>
                            <div class="sizes mt-5">
                                {/* <h6 class="text-uppercase">Size</h6> <label class="radio"> <input type="radio" name="size" value="S" checked /> <span>S</span> </label> <label class="radio"> <input type="radio" name="size" value="M" /> <span>M</span> </label> <label class="radio"> <input type="radio" name="size" value="L" /> <span>L</span> </label> <label class="radio"> <input type="radio" name="size" value="XL /"> <span>XL</span> </label> <label class="radio"> <input type="radio" name="size" value="XXL"> <span>XXL</span> </label> */}
                            </div>
                            <div class="cart mt-4 align-items-center"> <button class="btn btn-danger text-uppercase mr-2 px-4" onClick={() => handleClick(product)}>Add to cart</button> <button class="btn btn-danger text-uppercase mr-2 px-4">Buy Now</button> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Product