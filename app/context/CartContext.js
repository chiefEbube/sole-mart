"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import { useProductsData } from './ProductsDataContext';
import Swal from "sweetalert2";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { items, isLoading } = useProductsData();  

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  const addToCart = (productId) => {
    const productToAdd = items.find(product => product.id === productId);
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

    return Swal.fire({
      title: "Added to cart",
      text: "Item has been successfully added to your cart",
      icon: "success"
  })

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
      if (item.id === productId && newQuantity > 0) {
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
