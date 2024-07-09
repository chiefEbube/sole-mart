"use client"

import { createContext, useContext, useState, useEffect } from 'react';
import productsData from '@/data/products.json';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    [{
      "id": 50,
      "name": "Chelsea boot",
      "description": "Experience unmatched comfort and support with Nike Subway Infinity Run Flyknit, designed for long-distance running.",
      "price": 16000,
      "stars": 4.7,
      "reviews": 256,
      "remaining": 3,
      "isLike": false,
      "image": "/assets/images/black-boot.svg",
      "background": "#f7f5f7",
      "color": "White",
      "quantity": 1
  },
  {
      "id": 60,
      "name": "Air Force",
      "description": "Nike Subway Miler delivers a stable and cushioned run, ideal for runners seeking a reliable training partner.",
      "price": 13000,
      "stars": 4.5,
      "reviews": 189,
      "remaining": 3,
      "isLike": false,
      "image": "/assets/images/black-sneakers.svg",
      "background": "#f7f5f7",
      "color": "White",
      "quantity": 1
  },
  {
      "id": 70,
      "name": "Leather Shoe",
      "description": "Boost your performance with Nike Air Zoom Pegasus 37, offering responsive cushioning and a secure fit.",
      "price": 12000,
      "stars": 4.8,
      "reviews": 340,
      "remaining": 3,
      "isLike": false,
      "image": "/assets/images/brown-shoe.svg",
      "background": "#f7f5f7",
      "color": "White",
      "quantity": 1
  }]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  const addToCart = (productId) => {
    const productToAdd = productsData.find(product => product.id === productId);
    if (!productToAdd) {
      console.error(`Product with ID ${productId} not found.`);
      return;
    }
    const existingItemIndex = cartItems.findIndex(item => item.id === productId);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity++;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
    }

  };
  

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };
  

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
