import "./DiscountCard.css";
const DiscountCard = ({ image_src, image_alt, card_title, card_subtitle }) => {
	return (
		<div className="discount_card">
			<img className="img-responsive" alt={image_alt} src={image_src} />
			<p className="typo-label">{card_title}</p>
			<p className="typo-label">{card_subtitle}</p>
		</div>
	);
};

export { DiscountCard };
