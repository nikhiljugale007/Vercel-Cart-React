import { logo } from "../../assets";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useProductContext } from "../../context/ProductContext";
import { RiCloseCircleLine, RiMenuLine } from "react-icons/ri";
const Header = () => {
  const { productState } = useProductContext();
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="header-container">
      <header className="header">
        <div className="header-sub-container">
          <div>
            <button
              className="btn btn-primary btn-icon btn-menu"
              onClick={() => setOpenSidebar((prev) => !prev)}
            >
              {openSidebar ? (
                <RiCloseCircleLine size={20} />
              ) : (
                <RiMenuLine size={20} />
              )}
            </button>
            {openSidebar && (
              <div className="mobile-sidebar1">
                <ul className="sidebar-container">
                  <li className="sidebar-item">
                    <Link
                      to="/"
                      className="typo-subtext link-no-style full-width p-1"
                      onClick={() => setOpenSidebar(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="/product"
                      className="typo-subtext link-no-style full-width p-1"
                      onClick={() => setOpenSidebar(false)}
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="/wishlist"
                      className="typo-subtext link-no-style full-width p-1"
                      onClick={() => setOpenSidebar(false)}
                    >
                      Wishlist
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="/cart"
                      className="typo-subtext link-no-style full-width p-1"
                      onClick={() => setOpenSidebar(false)}
                    >
                      Cart
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <NavLink to="/" className="btn btn-link btn-hide header-link">
            <img className="img-round logo-container" src={logo} alt="logo" />
          </NavLink>
          <NavLink to="/" className="btn btn-link header-link">
            Home
          </NavLink>
          <NavLink to="/product" className="btn btn-link btn-hide header-link">
            Shop
          </NavLink>
        </div>
        <div className="search-container btn-hide">
          <button className="btn btn-icon">
            <i className="fa fa-search fa-lg" aria-hidden="true"></i>
          </button>
          <input
            type="text"
            className="search-bar"
            placeholder="woodland shoes.."
          />
        </div>

        <div className="header-sub-container">
          <NavLink to="/wishlist" className="link-no-style">
            <button className="btn btn-primary btn-icon btn-hide">
              <i className="far fa-heart fa-2x badge-parent">
                <span className="badge-content badge-itself">
                  {productState.wishlist.length}
                </span>
              </i>
            </button>
          </NavLink>
          <NavLink to="/cart" className="link-no-style">
            <button className="btn btn-primary btn-icon btn-hide">
              <i className="fas fa-shopping-basket fa-2x badge-parent">
                <span className="badge-content badge-itself">
                  {productState.cart.length}
                </span>
              </i>
            </button>
          </NavLink>
          <NavLink to="/login" className="link-no-style">
            <button className="btn btn-primary btn-icon">
              <i className="far fa-user-circle fa-2x"></i>
            </button>
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export { Header };
