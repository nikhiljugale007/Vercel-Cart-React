import "./Home.css";
import {
	hero1,
	casualshoes,
	flipflop,
	formalshoes,
	hrxlogo,
	nikelogo,
	sandal,
	woodlandlogo,
	wrognlogo,
} from "../../assets";
import { Adv_card, Discount_card } from "../../components";
const Home = () => {
	const todays_deals = [
		{
			item_name: "Casual shoes",
			offer: "min 30% off",
			image_src: casualshoes,
			image_alt: "Casual shoes",
		},
		{
			item_name: "Formal shoes",
			offer: "flat 50% off",
			image_src: formalshoes,
			image_alt: "Formal shoes",
		},
		{
			item_name: "Leather shoes",
			offer: "min 20% off",
			image_src: flipflop,
			image_alt: "Casual shoes",
		},
		{
			item_name: "Sneakers",
			offer: "buy 1 get 1",
			image_src: sandal,
			image_alt: "Sneaker",
		},
		{
			item_name: "Casual shoes",
			offer: "min 30% off",
			image_src: casualshoes,
			image_alt: "Casual shoes",
		},
		{
			item_name: "Formal shoes",
			offer: "flat 50% off",
			image_src: formalshoes,
			image_alt: "Formal shoes",
		},
		{
			item_name: "Leather shoes",
			offer: "min 20% off",
			image_src: flipflop,
			image_alt: "Casual shoes",
		},
		{
			item_name: "Sneakers",
			offer: "buy 1 get 1",
			image_src: sandal,
			image_alt: "Sneaker",
		},
	];
	const top_categories = [
		{
			category_name: "Casual shoes",
			image_src: casualshoes,
			image_alt: "Casual shoes",
		},
		{
			category_name: "Formal shoes",
			image_src: formalshoes,
			image_alt: "Formal shoes",
		},
		{
			category_name: "Leather shoes",
			image_src: flipflop,
			image_alt: "Casual shoes",
		},
		{
			category_name: "Sneakers",
			image_src: sandal,
			image_alt: "Sneaker",
		},
	];

	const top_brands = [
		{
			brand_name: "Woodland",
			image_src: woodlandlogo,
			image_alt: "woodland logo",
		},
		{
			brand_name: "Nike",
			image_src: nikelogo,
			image_alt: "nike logo",
		},
		{
			brand_name: "hrx ",
			image_src: hrxlogo,
			image_alt: "hrx logo",
		},
		{
			brand_name: "Wrogn ",
			image_src: wrognlogo,
			image_alt: "wrogn logo",
		},
	];
	return (
		<main>
			<div className="hero-section">
				<div className="grid grid-2x2">
					<div className="text-section">
						<div className="typo-label">UP TO 20% DISCOUNT ON</div>
						<div className="h1 text-bold">Footware Fashion</div>
						<p className="typo-subtext">
							Top deals on shoes, sandals, flip-flops. Find your best brands at
							affordable price. No cost EMI. Complete Protection. Exchange
							offer.
						</p>
						<button className="btn btn-primary">Explore now</button>
					</div>
					<div className="img-section">
						<img className="img-responsive" alt="hero" src={hero1} />
					</div>
				</div>
			</div>
			<div className="top-category flex-vt-center">
				<div className="flex-vt-center category-heading typo-label">
					<p className="h1">Todays top deals</p>
				</div>
				<div className="grid grid-auto">
					{todays_deals.map((item) => (
						<Discount_card
							card_title={item.item_name}
							card_subtitle={item.offer}
							image_src={item.image_src}
							image_alt={item.image_alt}
						/>
					))}
				</div>
			</div>
			<div className="top-category flex-vt-center">
				<div className="flex-vt-center category-heading typo-label">
					<p className="h1">Top categories</p>
					<p>Check out which categories are trending right out and then shop</p>
				</div>
				<div className="grid grid-4-responsive">
					{top_categories.map((item) => (
						<Adv_card
							card_title={item.category_name}
							image_src={item.image_src}
							image_alt={item.image_alt}
						/>
					))}
				</div>
			</div>
			<div className="featured-brand flex-vt-center">
				<div className="flex-vt-center category-heading typo-label">
					<p className="h1">Featured brands</p>
					<p>Find top brands at most affordable price</p>
				</div>

				<div className="grid grid-4-responsive">
					{top_brands.map((item) => (
						<Adv_card
							card_title={item.brand_name}
							image_src={item.image_src}
							image_alt={item.image_alt}
						/>
					))}
				</div>
			</div>
		</main>
	);
};

export { Home };
