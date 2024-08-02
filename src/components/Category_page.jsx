import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard'; 
import { items } from './data'; 

const CategoryPage = () => {
    const { category } = useParams();
    const [filteredItems, setFilteredItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const categoryItems = items.filter(item => item.category.toLowerCase() === category.toLowerCase());
        setFilteredItems(categoryItems);
    }, [category]);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const currentItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleAddToCart = (id, quantity) => {
        // Implement your add to cart logic here
        console.log(`Added item ${id} with quantity ${quantity} to cart`);
    };

    return (
        <div className="category-page">
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Items</h2>
            <div className="items-grid">
                {currentItems.map(item => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.name}
                        category={item.category}
                        price={item.price}
                        onAddToCart={handleAddToCart} // Pass the add to cart handler
                    />
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default CategoryPage;
