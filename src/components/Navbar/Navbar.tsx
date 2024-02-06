import React from "react";
import { Link } from "react-router-dom";

// Assuming you have defined your SVGs or imported them
// If using inline SVGs or an SVG sprite, ensure they are accessible

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-md bg-dark sticky-top border-bottom"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link className="navbar-brand d-md-none" to="/">
          {/* Replace SVG usage as appropriate */}
          <svg className="bi" width="24" height="24">
            <use href="#aperture"></use>
          </svg>
          Aperture
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Aperture
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 justify-content-between">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <svg className="bi" width="24" height="24">
                    <use href="#aperture"></use>
                  </svg>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tour">
                  Tour
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/enterprise">
                  Enterprise
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <svg className="bi" width="24" height="24">
                    <use href="#cart"></use>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
