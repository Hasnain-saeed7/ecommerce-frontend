import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productService } from '../../api/productService';
import api from '../../api/axios';
import './Admin.css';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await productService.getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await api.delete(`/products/${id}`);
        setProducts(products.filter(p => p.id !== id));
        alert('Product deleted successfully!');
      } catch (error) {
        console.error('Failed to delete product:', error);
        alert('Failed to delete product.');
      }
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="admin-container">Loading...</div>;
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Manage Products</h1>
        <Link to="/admin/add-product" className="admin-btn primary">
          + Add Product
        </Link>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products by name or brand..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="products-table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.main_image} alt={product.name} className="product-thumb" />
                </td>
                <td>{product.name}</td>
                <td>{product.brand || 'N/A'}</td>
                <td>
                  {product.discount_price ? (
                    <>
                      <span className="original-price">${product.price}</span>
                      <span className="discount-price">${product.discount_price}</span>
                    </>
                  ) : (
                    `$${product.price}`
                  )}
                </td>
                <td>
                  {product.variants?.reduce((total, v) => total + v.stock, 0) || 0}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredProducts.length === 0 && (
        <p className="no-results">No products found.</p>
      )}
    </div>
  );
};

export default ManageProducts;