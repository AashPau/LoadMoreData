import React, { useState } from "react";

export const LoadMoreData = () => {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [count, setCount] = useState(0);

	return <div className="container">LoadMoreData</div>;
};
