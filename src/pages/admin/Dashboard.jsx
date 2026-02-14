// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { productService } from '../../api/productService';
// import { useAuth } from '../../contexts/AuthContext';
// import './Admin.css';

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     totalProducts: 0,
//     totalCategories: 0,
//   });
//   const { user } = useAuth();

//   useEffect(() => {
//     loadStats();
//   }, []);

//   const loadStats = async () => {
//     try {
//       const products = await productService.getProducts();
//       const categories = await productService.getCategories();
//       setStats({
//         totalProducts: products.length,
//         totalCategories: categories.length,
//       });
//     } catch (error) {
//       console.error('Failed to load stats:', error);
//     }
//   };

// //   if (!user?.is_admin) {
// //     return (
// //       <div className="admin-container">
// //         <h2>Access Denied</h2>
// //         <p>You need admin privileges to access this page.</p>
// //       </div>
// //     );
// //   }

//   return (
//     <div className="admin-container">
//       <h1>Admin Dashboard</h1>
      
//       <div className="admin-stats">
//         <div className="stat-card">
//           <h3>{stats.totalProducts}</h3>
//           <p>Total Products</p>
//         </div>
//         <div className="stat-card">
//           <h3>{stats.totalCategories}</h3>
//           <p>Total Categories</p>
//         </div>
//       </div>

//       <div className="admin-actions">
//         <Link to="/admin/products" className="admin-btn">
//           Manage Products
//         </Link>
//         <Link to="/admin/categories" className="admin-btn">
//           Manage Categories
//         </Link>
//         <Link to="/admin/add-product" className="admin-btn primary">
//           Add New Product
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard; 



import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { productService } from '../../api/productService';
import './Admin.css';

const ADMIN_PASSWORD = "36302hass"; // Change this to your secret password

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is already authenticated
    const adminAuth = sessionStorage.getItem('adminAuth');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
      loadStats();
    }
  }, []);

  const loadStats = async () => {
    try {
      const products = await productService.getProducts();
      const categories = await productService.getCategories();
      setStats({
        totalProducts: products.length,
        totalCategories: categories.length,
      });
    } catch (error) {
      console.error('Failed to load stats:', error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('adminAuth', 'true');
      setIsAuthenticated(true);
      setError('');
      loadStats();
    } else {
      setError('Incorrect password!');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-container">
        <div className="admin-login-box">
          <h2>🔒 Admin Login</h2>
          <p>Enter admin password to access dashboard</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '15px',
                fontSize: '16px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginBottom: '20px'
              }}
              required
            />
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="admin-btn" style={{ background: '#e74c3c' }}>
          Logout
        </button>
      </div>
      
      <div className="admin-stats">
        <div className="stat-card">
          <h3>{stats.totalProducts}</h3>
          <p>Total Products</p>
        </div>
        <div className="stat-card">
          <h3>{stats.totalCategories}</h3>
          <p>Total Categories</p>
        </div>
      </div>

      <div className="admin-actions">
        <Link to="/admin/products" className="admin-btn">
          Manage Products
        </Link>
        <Link to="/admin/categories" className="admin-btn">
          Manage Categories
        </Link>
        <Link to="/admin/add-product" className="admin-btn primary">
          Add New Product
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;