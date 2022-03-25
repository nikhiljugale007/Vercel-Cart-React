import { logo } from "../../assets";
import { Link } from "react-router-dom";
import "./Header.css";
import { useProductContext } from "../../context/ProductContext";
const Header = () => {
	const { productState } = useProductContext();
	return (
		<div className="header-container">
			<header className="header">
				<div className="header-sub-container">
					<button className="btn btn-primary btn-icon btn-menu">
						<i className="fa fa-bars fa-lg" aria-hidden="true"></i>
					</button>
					<Link to="/" className="btn btn-link btn-hide header-link">
						<img className="img-round logo-container" src={logo} alt="logo" />
					</Link>
					<Link to="/" className="btn btn-link header-link">
						Home
					</Link>
					<Link to="/product" className="btn btn-link btn-hide header-link">
						Shop
					</Link>
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
					<Link to="/wishlist" className="link-no-style">
						<button className="btn btn-primary btn-icon btn-hide">
							<i className="far fa-heart fa-2x badge-parent">
								<span className="badge-content badge-itself">
									{productState.wishlist.length}
								</span>
							</i>
						</button>
					</Link>
					<Link to="/cart" className="link-no-style">
						<button className="btn btn-primary btn-icon btn-hide">
							<i className="fas fa-shopping-basket fa-2x badge-parent">
								<span className="badge-content badge-itself">
									{productState.cart.length}
								</span>
							</i>
						</button>
					</Link>
					<Link to="/" className="link-no-style">
						<button className="btn btn-primary btn-icon">
							<i className="far fa-user-circle fa-2x"></i>
						</button>
					</Link>
				</div>
			</header>
		</div>
	);
};

export { Header };
