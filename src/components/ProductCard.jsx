import React, { useState, useEffect } from 'react';
import { useCart } from './ContextApi';
import './css/design.css';

const ProductCard = ({
    id,
    image,
    title,
    category,
    subcategories,
    totalPrice,
    price,
    tott,
    name,
    quantity = 0
}) => {
    const { handleIncrement, handleDecrement, addToCart } = useCart();
    const [currentQuantity, setCurrentQuantity] = useState(quantity);
    const [isInWishlist, setIsInWishlist] = useState(false);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(`product-${id}`));
        if (storedData) {
            setCurrentQuantity(storedData.currentQuantity);
            setIsInWishlist(storedData.isInWishlist);
        }
    }, [id]);

    const updateLocalStorage = (quantity) => {
        localStorage.setItem(`product-${id}`, JSON.stringify({
            name:name,
            currentQuantity: quantity,
            totalPrice: quantity * price,
            isInWishlist
        }));
    };

    const increaseQuantity = () => {
        setCurrentQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            handleIncrement(id, newQuantity);
            updateLocalStorage(newQuantity);
            return newQuantity;
        });
    };

    const decreaseQuantity = () => {
        setCurrentQuantity(prevQuantity => {
            if (prevQuantity <= 0) return prevQuantity;
            const newQuantity = prevQuantity - 1;
            handleDecrement(id, newQuantity);
            updateLocalStorage(newQuantity);
            return newQuantity;
        });
    };

    const handleAddToCart = () => {
        addToCart({ id, title, price }, currentQuantity);
    };

    const toggleWishlist = () => {
        setIsInWishlist(prevState => {
            const newState = !prevState;
            updateLocalStorage(currentQuantity);
            return newState;
        });
    };

    return (
        <div className="product-wrapper" id={`product-${id}`} style={{ left: '150px', paddingRight: '100px' }}>
            <div className="article">
                <div className="wishlist-box">
                    <div
                        title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                        className={`wishlist-icon ${isInWishlist ? 'in-wishlist' : ''}`}
                        data-wishlist-product={id}
                        onClick={toggleWishlist}
                        style={{ cursor: 'pointer' }}
                    >
                        &nbsp;
                    </div>
                </div>

                <div className="product">
                    <div className="product-modal-wrapper" data-toggle="modal" data-target={`#productModal${id}`}>
                        <div className="product-img">
                            {image ? (
                                <img src={image} alt={title} />
                            ) : (
                                <p>No image provided</p>
                            )}
                        </div>
                        <div> </div>
                    </div>
                    <div className="product-title">
                        <div className="product-tag">
                            <p className="category-title">{category} &nbsp;/ {subcategories}</p>
                        </div>
                        <div>
                            <h2 className="title">{name}</h2>
                        </div>

                        <div className="price-info d-flex">
                            <h2 className="price">
                                ${price.toFixed(2)}
                                &nbsp;&nbsp;
                                <span>Total: ${price * currentQuantity}</span>
                                <span>{totalPrice}</span>
                            </h2>
                        </div>
                    </div>
                    <div className="product-qt">
                        <div className="product-increment cart-increment">
                            <div className="input-group input-number-group">
                                <div className="input-group-button" onClick={decreaseQuantity} style={{ cursor: 'pointer' }}>
                                    <span
                                        className="input-number-decrement"
                                        style={{ pointerEvents: currentQuantity <= 0 ? 'none' : 'auto', color: currentQuantity <= 0 ? 'grey' : 'black' }}
                                    >
                                        -
                                    </span>
                                </div>
                                &nbsp; 
                                <input className="input-number" type="number" value={currentQuantity} readOnly style={{ color: 'black' }} />
                                <div className="input-group-button" onClick={increaseQuantity} style={{ cursor: 'pointer' }}>
                                    <span className="input-number-increment">
                                        +
                                    </span>
                                </div>
                            </div>
                        </div>
                        &nbsp;
                        <div>{tott}</div>
                    </div>
                    <div className="add-card" style={{ width: '214px' }}>
                        <form className="add-to-cart">
                            <input type="hidden" name="product" value={id} />
                            <div
                                type="submit"
                                className="add-btn"
                                style={{ width: '98%', height: '43px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                onClick={handleAddToCart}
                            >
                                <span>Add to cart</span>
                            </div>
                        </form>
                    </div>
                    <div className="spinner" id={`product-component-spinner-${id}`} style={{ display: 'none' }}>
                        <img className="img-fluid" src="static/img/spinner.gif" alt="Loading spinner" />
                    </div>
                </div>
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default ProductCard;
=======
export default ProductCard;
>>>>>>> origin/main
