import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  // Fetch cart when user logs in
  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      setCart([]);
    }
  }, [user]);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/cart');
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    if (!user) {
      return { success: false, message: 'Please login to add items to cart' };
    }

    try {
      const response = await axios.post('/api/cart', {
        productId,
        quantity,
      });
      setCart(response.data);
      return { success: true };
    } catch (error) {
      const message =
        error.response?.data?.message || 'Failed to add item to cart';
      return { success: false, message };
    }
  };

  const updateCartItem = async (productId, quantity) => {
    try {
      const response = await axios.put(`/api/cart/${productId}`, {
        quantity,
      });
      setCart(response.data);
      return { success: true };
    } catch (error) {
      const message =
        error.response?.data?.message || 'Failed to update cart item';
      return { success: false, message };
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await axios.delete(`/api/cart/${productId}`);
      setCart(response.data);
      return { success: true };
    } catch (error) {
      const message =
        error.response?.data?.message || 'Failed to remove item from cart';
      return { success: false, message };
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete('/api/cart');
      setCart([]);
      return { success: true };
    } catch (error) {
      const message =
        error.response?.data?.message || 'Failed to clear cart';
      return { success: false, message };
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      if (item.product) {
        return total + item.product.price * item.quantity;
      }
      return total;
    }, 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
        fetchCart,
        getCartTotal,
        getCartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

