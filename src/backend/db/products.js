import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		title: "Formal Shoes",
		brand: "Woodland",
		price: 100,
		original_price: 200,
		categoryName: "Formal Shoes",
		rating: 4,
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Sneakers",
		brand: "Nike",
		price: 500,
		original_price: 1000,
		categoryName: "Casual Shoes",
		rating: 3,
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Running shoes",
		brand: "Puma",
		price: 800,
		original_price: 1200,
		categoryName: "Running Shoes",
		rating: 3,
		inStock: false,
	},
];
