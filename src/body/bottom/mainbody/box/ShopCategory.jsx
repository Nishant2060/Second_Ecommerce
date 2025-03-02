import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Items from './Items';

const ShopCategory = () => {
    const { category } = useParams();  // Get category from URL
    const [data, setData] = useState([]);
    const [shopData, setShopData] = useState([]); // Store all products
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api.escuelajs.co/api/v1/products");
            const result = await response.json();

            setShopData(result); // Store all products

            // Convert category to lowercase for case-insensitive comparison
            const filteredData = result.filter(item => 
                item.category.name.toLowerCase() === category.toLowerCase()
            );

            setData(filteredData);

        } catch (error) {
            console.error("Error fetching data:", error);
            setData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [category]); // Re-fetch data when category changes

    return (
        <div>
            {loading ? (
                <p className='text-[100px] font-bold text-center h-[100vh] '>Loading...</p>
            ) : data.length > 0 ? (
                // Show filtered products based on category
                <div className="shop-category grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                   {data.map((item) => (
                        <React.Fragment key={item.id}>
                            <Items 
                                image={item.images[0]} 
                                name={item.title} 
                                price={item.price} 
                            />
                        </React.Fragment>
                    ))} 
                </div>
            ) : shopData.length > 0 ? (
                // Show all products if no category match
                <div className="shop-category grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                   {shopData.map((item) => (
                        <React.Fragment key={item.id}>
                            <Items 
                                image={item.images[0]} 
                                name={item.title} 
                                price={item.price} 
                            />
                        </React.Fragment>
                    ))} 
                </div>
            ) : (
                <p className="text-center text-black">No products available.</p>
            )}
        </div>
    );
};

export default ShopCategory;
