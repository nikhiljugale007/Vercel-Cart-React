import "./SingleProductPage.css";
import { useEffect } from "react";
import { useState } from "react";
import { getSingleProduct } from "../../api/apicall";
import { useParams } from "react-router-dom";
const SingleProductPage = () => {
	const [product, setProduct] = useState();
	const [loading, setLoading] = useState(false);
	const { id } = useParams();
	useEffect(() => {
		const getProduct = async () => {
			setLoading(true);
			const response = await getSingleProduct(id);
			setLoading(false);
			if (response.success) {
				setProduct(response.product);
			} else {
				console.log("ERR");
			}
		};
		getProduct();
	}, [id]);

	return (
		<div className="single-product-page">
			{loading ? <h1>Loading</h1> : <h1>hello</h1>}
		</div>
	);
};

export { SingleProductPage };
