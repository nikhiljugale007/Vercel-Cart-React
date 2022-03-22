import "./Adv_card.css";
const Adv_card = ({ image_src, image_alt, card_title }) => {
	return (
		<div className="category-item">
			<img className="img-round" alt={image_alt} src={image_src} />
			<p className="typo-label">{card_title}</p>
		</div>
	);
};

export { Adv_card };
