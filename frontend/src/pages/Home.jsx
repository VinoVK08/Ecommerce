// import { IconContext } from "react-icons";
// import { BsFillChatDotsFill , BsFillHandThumbsUpFill} from "react-icons/bs";
import "./home.css"

function Home() {
  return (
  <>
    {/* <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="product-grid">
                <div class="product-image">
                    <img class="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar4.png" />
                    <img class="pic-2" src="https://www.w3schools.com/bootstrap4/img_avatar3.png" />
                    
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">Sale</span>
                    <span class="product-discount-label">20%</span>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Women's Blouse</a></h3>
                    <div class="price">$16.00
                        <span>$20.00</span>
                    </div>
                    <a class="add-to-cart" href="">+ Add To Cart</a>
                </div>
            </div>
        </div>
      </div> */}
      <section style={{ background_color: "#eee" }}>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
        <div class="card">
          <div class="d-flex justify-content-between p-3">
            <p class="lead mb-0">Today's Combo Offer</p>
            <div
              class="bg-info d-flex align-items-center justify-content-center shadow-1-strong"
              style={{ borderRadius: "5px", padding:"10px", fontWeight: "bold" }}>
              <p class="text-white mb-0 small">Laptops</p>
            </div>
          </div>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
            class="card-img-top" alt="Laptop" />
          <div class="card-body">

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">HP Notebook</h5>
              <h5 class="text-dark mb-0">$999</h5>
            </div>

            <div class="d-flex justify-content-between mb-2" style={{ marginTop: "20px"}}>
              <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
              <button type="button" class="btn btn-outline-dark">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  </div>
</section>
  </>
  )
}

export default Home