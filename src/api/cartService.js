import api from './axios';

export const cartService = {
  // Get cart
  getCart: async () => {
    const response = await api.get('/cart');
    return response.data;
  },

  // Add to cart
  addToCart: async (item) => {
    const response = await api.post('/cart', item);
    return response.data;
  },

  // Update cart item
  updateCartItem: async (itemId, quantity) => {
    const response = await api.put(`/cart/${itemId}`, { quantity });
    return response.data;
  },

  // Remove from cart
  removeFromCart: async (itemId) => {
    await api.delete(`/cart/${itemId}`);
  },

  // Clear cart
  clearCart: async () => {
    await api.delete('/cart');
  },
}; 
