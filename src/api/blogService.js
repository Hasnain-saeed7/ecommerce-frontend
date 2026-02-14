import api from './axios';

export const blogService = {
  // Get all blog posts
  getBlogPosts: async () => {
    const response = await api.get('/blog');
    return response.data;
  },

  // Get single blog post
  getBlogPost: async (id) => {
    const response = await api.get(`/blog/${id}`);
    return response.data;
  },
};