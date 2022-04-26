import { useState } from 'react';
import {Link} from 'react-router-dom';

function Header() {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark shadow fixed-top">
      <div className="container ms-auto mb-2 mb-lg-0">
      <Link className="navbar-brand" to="/">Ecommerce</Link>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>   */}
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <br /> <br /> <br />
    </>
  )
}

export default Header