import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		title: "Woods Leather Shoes",
		brand: "Woodland",
		image_src:
			"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16237770/2021/12/16/e553f579-e733-45d4-9a1c-f893e6f3de601639630910414-Woods-Men-Tan-Brown-Leather-Textured-Formal-Oxfords-10163963-1.jpg",
		price: 100,
		original_price: 200,
		categoryName: "Formal Shoes",
		rating: 4,
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Nike Air Max",
		brand: "Nike",
		image_src:
			"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16045952/2022/1/28/a703c644-4022-4337-bdcd-370464df214c1643367305178-Nike-Air-Max-97-SE-Mens-Shoes-971643367304680-1.jpg",
		price: 500,
		original_price: 1000,
		categoryName: "Casual Shoes",
		rating: 3,
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Puma Enzo 2",
		brand: "Puma",
		image_src:
			"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13483768/2022/3/24/811e36e8-b821-401f-8d7a-259d7a83b0f21648108010902PumaMenBlueEnzo2RunningShoes1.jpg",
		price: 800,
		original_price: 1200,
		categoryName: "Running Shoes",
		rating: 3,
		inStock: false,
	},
	{
		_id: uuid(),
		title: "Quest 3",
		brand: "One 8",
		image_src:
			"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15244578/2022/3/14/33892765-44e5-41c3-ad64-6ac4cf6942e71647251129624-Puma-X-one8-Virat-Kohli-Men-Navy-Blue--Grey-Dart-IDP-Running-1.jpg",
		price: 1000,
		original_price: 1500,
		categoryName: "Running Shoes",
		rating: 5,
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Leather Formal Derbys",
		brand: "Louis Philipe",
		image_src:
			"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16877416/2022/2/3/4978e0f2-3c14-41ce-8d6c-44461a01e7e81643861899252-Louis-Philippe-Men-Formal-Shoes-6651643861898744-1.jpg",
		price: 500,
		original_price: 900,
		categoryName: "Formal Shoes",
		rating: 4,
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Chunky Sneaker",
		brand: "HRX",
		image_src:
			"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11986112/2021/2/17/1456ef1a-6d72-4bc8-b506-d77d68883ea21613525167572HIGHLANDERMenWhiteColourblockedSneakers1.jpg",
		price: 400,
		original_price: 600,
		categoryName: "Casual Shoes",
		rating: 2,
		inStock: true,
	},
];
