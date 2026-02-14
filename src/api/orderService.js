import api from './axios';

export const orderService = {
  // Get all orders
  getOrders: async () => {
    const response = await api.get('/orders');
    return response.data;
  },

  // Get single order
  getOrder: async (id) => {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  },

  // Create order
  createOrder: async (orderData) => {
    const response = await api.post('/orders/', orderData);
    return response.data;
  },
};





























