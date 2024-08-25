"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import Swal from "sweetalert2";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, item) => {
      const qtyInCart = item.extra_infos.find(info => info.key === 'qtyInCart');
      return total + (qtyInCart ? parseInt(qtyInCart.value, 10) : 0);
    }, 0);
    setCartCount(count);
  }, [cartItems]);

  const addToCart = async (productId) => {
    const organization_id = process.env.NEXT_PUBLIC_ORGANIZATION_ID;
    const Appid = process.env.NEXT_PUBLIC_APPID;
    const Apikey = process.env.NEXT_PUBLIC_APIKEY;
    try {
      const res = await fetch(`https://api.timbu.cloud/products/${productId}?organization_id=${organization_id}&Appid=${Appid}&Apikey=${Apikey}`);

      if (!res.ok) {
        throw new Error('Failed to fetch product data');
      }
      const productToAdd = await res.json();

      if (!productToAdd) {
        console.error(`Product with ID ${productId} not found.`);
        return;
      }

      const existingItemIndex = cartItems.findIndex(item => item?.id === productId);

      if (existingItemIndex !== -1) {
        const updatedCart = [...cartItems];
        updatedCart[existingItemIndex].extra_infos = updatedCart[existingItemIndex].extra_infos.map(info => {
          if (info.key === 'qtyInCart') {
            return {
              ...info,
              value: (parseInt(info.value, 10) + 1).toString()
            };
          }
          return info;
        });
        setCartItems(updatedCart);
      } else {
        const updatedExtraInfos = productToAdd?.extra_infos?.map(info => {
          if (info?.key === 'qtyInCart') {
            return {
              ...info,
              value: (parseInt(info?.value, 10) + 1).toString()
            };
          }
          return info;
        });

        setCartItems([...cartItems, {
          ...productToAdd,
          extra_infos: updatedExtraInfos
        }]);
      }

      Swal.fire({
        title: "Added to cart",
        text: "Item has been successfully added to your cart",
        icon: "success"
      })
    } catch (error) {
      console.error('Error adding item to cart:', error.message);
      Swal.fire({
        title: "Error",
        text: "Failed to add item to cart",
        icon: "error"
      });
    }
  };


  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item?.id !== productId);
    setCartItems(updatedCart);
  };

  const updateQuantityInCart = (productId, change) => {
    const updatedCart = cartItems.map(item => {
      if (item?.id === productId) {
        const updatedExtraInfos = item.extra_infos.map(info => {
          if (info.key === 'qtyInCart') {
            const newValue = parseInt(info.value, 10) + change;
            return {
              ...info,
              value: newValue >= 1 ? newValue.toString() : "1" // Ensure value doesn't go below 1
            };
          }
          return info;
        });

        return {
          ...item,
          extra_infos: updatedExtraInfos
        };
      }
      return item;
    });

    setCartItems(updatedCart);
  };

  const increaseQuantity = (productId) => {
    updateQuantityInCart(productId, 1);
  };

  const decreaseQuantity = (productId) => {
    updateQuantityInCart(productId, -1);
  };

  const updateQuantity = (productId, newQuantity) => {
    updateQuantityInCart(productId, newQuantity);
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
