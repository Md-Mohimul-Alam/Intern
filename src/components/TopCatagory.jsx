import React, { useState } from 'react';
import './css/Top.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from 'react-router-dom'; // Import Link
import { useCart } from './ContextApi';
import ProductCard from './ProductCard';

const TopCategories = () => {
    const { items, handleShowAllClickTop, categoryListRef, scrollLeft, scrollRight, subcategoryListRef, handleSubcategoryClick, handleCategoryClick, selectedCategory, selectedSubcategory, categories } = useCart();
    
    const [showAllItems, setShowAllItems] = useState(false);
    
    
    const selectedCategoryDetails = categories.find(category => category.path === selectedCategory);
    const selectedSubcategoryDetails = selectedCategoryDetails?.subcategories.find(sub => sub.path === selectedSubcategory);

    console.log('Selected Category Details:', selectedCategoryDetails);
    console.log('Selected Subcategory Details:', selectedSubcategoryDetails);

    const filteredItems = showAllItems || !selectedCategory
        ? items
        : items?.filter(item =>
            item.category === selectedCategory && (!selectedSubcategory || item.subcategories === selectedSubcategory)
        ) || [];

    const handleShowAllClick = () => {
        setShowAllItems(prevState => !prevState);
    };
    return (
        <div className="top-category-wrapper top d-block">
        <div className="top-category-content">
            {selectedCategory ? (
                <>
                    <div className="headerContainer">
                        <div className="initialLabel">
                            <h2 style={{ width: '400px', display:'flex', alignItems:'center',justifyContent:'center' }}>
                                <span></span>
                                <span> {selectedSubcategory ? selectedSubcategoryDetails.title : selectedCategoryDetails.title} </span>
                                <span></span>
                            </h2>
                        </div>
                        <div >
                            <div className="scrollButtons" style={{cursor:'pointer', width: 'auto', display: 'flex' }}>
                                <div className="scrollLeft" onClick={() => scrollLeft(categoryListRef)} style={{ backgroundColor: 'white', alignItems: 'center' }}>
                                    <KeyboardArrowLeftIcon/>
                                </div>
                                <span> &nbsp;&nbsp; &nbsp;</span>
                                <div className="viewButton hidden-xs hidden-sm" onClick={handleShowAllClick} style={{ cursor: 'pointer' }}>
                                    <p style={{ paddingTop: '10px', marginBottom: '10px',marginRight:'0px',padding:'5px' }}> {showAllItems ? 'Hide All Products' : 'View All Products'}                                    </p>
                                </div>
                                <span> &nbsp;&nbsp; </span>
                                <div className="scrollRight" onClick={() => scrollRight(categoryListRef)} style={{ background: 'white', alignItems: 'center' }}>
                                    <KeyboardArrowRightIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    {selectedCategoryDetails.subcategories && !selectedSubcategory && (
                        <div className="topcategorylist categoryContainer" ref={categoryListRef}>
                            <ul className="top-category-Ul">
                                {selectedCategoryDetails && (
                                    <li className="categoryBox" style={{ width: '250px', height: '200px' }}>
                                        <Link to="#" style={{ textDecoration: 'none' }} onClick={() => handleCategoryClick(selectedCategoryDetails.path)}>
                                            <div className="selected-category" style={{ width: '200px', height: '200px', alignItems: 'center', paddingTop: '25px' }}>
                                                <div title={selectedCategoryDetails.title}>
                                                    <div className="img-wrapper categoryImg">
                                                        <img className="img" src={selectedCategoryDetails.image} alt={selectedCategoryDetails.title} />
                                                    </div>
                                                    <p style={{ color: 'black' }}>Showing items in {selectedCategoryDetails.title}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )}
                                {selectedCategoryDetails.subcategories.map(sub => (
                                    <li className="categoryBox" style={{ width: '250px', height: '200px', display: 'flex' }}>
                                        <Link to="#" onClick={() => handleSubcategoryClick(sub.path)} style={{ textDecoration: 'none' }}>
                                            <div key={sub.path} style={{ width: '200px', height: '200px', alignItems: 'center', paddingTop: '25px' }}>                                    
                                                <div title={sub.title}>
                                                    <div className="img-wrapper categoryImg">
                                                        <img className="img" src={sub.image} alt={sub.title} />
                                                    </div>
                                                    <p style={{ color: 'black' }}>{sub.title}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    {selectedSubcategory && (
                        <div className="topcategorylist categoryContainer selected-subcategory-details" ref={subcategoryListRef}>
                            <ul className="top-category-Ul" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {selectedSubcategoryDetails && (
                                    <li className="categoryBox" style={{ width: '250px', height: '200px' }}>
                                        <Link to="#" style={{ textDecoration: 'none' }} onClick={() => handleSubcategoryClick(selectedSubcategoryDetails.path)}>
                                            <div className="selected-subcategory" style={{ width: '200px', height: '200px', alignItems: 'center', paddingTop: '25px' }}>
                                                <div title={selectedSubcategoryDetails.title}>
                                                    <div className="img-wrapper categoryImg">
                                                        <img className="img" src={selectedSubcategoryDetails.image} alt={selectedSubcategoryDetails.title} />
                                                    </div>
                                                    <p style={{ color: 'black' }}>Showing items in {selectedSubcategoryDetails.title}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}

                    <div className="category-items">
                        <div className="category-toggle">
                            <div className="btn-toggle-wrapper">
                                <p id="btn-category-toggle" onClick={handleShowAllClickTop}>Show All Categories</p>
                            </div>
                        </div>
                        <div className="item-cards-container">
                            {filteredItems.length > 0 ? (
                                filteredItems.map(item => (
                                    <ProductCard key={item.id} {...item} />
                                ))
                            ) : (
                                <p style={{ paddingLeft: '100px' }}>No items available in this category.</p>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="headerContainer">
                        <div className="initialLabel">
                            <h2 style={{ width: '400px' }}>
                                <span></span>
                                <span>Popular Categories</span>
                                <span></span>
                            </h2>
                        </div>
                        <div style={{ paddingLeft: '50px' }}>
                            <div className="scrollButtons" style={{cursor:'pointer', width: '450px', display: 'flex' }}>
                                <div className="scrollLeft" onClick={() => scrollLeft(categoryListRef)} style={{ backgroundColor: 'white', alignItems: 'center' }}>
                                    <KeyboardArrowLeftIcon />
                                </div>
                                <span> &nbsp;&nbsp; &nbsp;</span>
                                <div className="viewButton hidden-xs hidden-sm" onClick={handleShowAllClick} style={{ cursor: 'pointer' }}>
                                    <span> </span>
                                    <p style={{ paddingTop: '10px', marginBottom: '10px',marginRight:'0px',padding:'5px' }}>Click to Scrole</p>
                                    <span></span>
                                </div>
                                <span> &nbsp;&nbsp; </span>
                                <div className="scrollRight" onClick={() => scrollRight(categoryListRef)} style={{ background: 'white', alignItems: 'center' }}>
                                    <KeyboardArrowRightIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="topcategorylist categoryContainer" ref={categoryListRef} >
                        <ul className="top-category-Ul">
                            {categories.map((category, index) => (
                                <li key={index} className="categoryBox" style={{ width: '250px', height: '200px' }}>
                                    <Link to="#" style={{ textDecoration: 'none' }} onClick={() => handleCategoryClick(category.path)}>
                                        <div style={{ width: '200px', height: '200px', alignItems: 'center', paddingTop: '25px' }}>
                                            <div title={category.title}>
                                                <div className="img-wrapper categoryImg">
                                                    <img className="img" src={category.image} alt={`Top category - ${category.title}`} />
                                                </div>
                                                <h4 className="top-category-title categoryName" style={{ color: 'black' }}>{category.title}</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>

        {!selectedCategory && (
            <div className="category-toggle">
                <div className="btn-toggle-wrapper">
                    <p id="btn-category-toggle">Show top Category</p>
                </div>
            </div>
        )}
    </div>
    );
};

export default TopCategories;