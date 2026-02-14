// import { useState, useEffect } from 'react';
// import { productService } from '../../api/productService';
// import api from '../../api/axios';
// import './Admin.css';

// const ManageCategories = () => {
//   const [categories, setCategories] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     image_url: ''
//   });

//   useEffect(() => {
//     loadCategories();
//   }, []);

//   const loadCategories = async () => {
//     try {
//       const data = await productService.getCategories();
//       setCategories(data);
//     } catch (error) {
//       console.error('Failed to load categories:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('/products/categories', formData);
//       alert('Category added successfully!');
//       setFormData({ name: '', description: '', image_url: '' });
//       setShowForm(false);
//       loadCategories();
//     } catch (error) {
//       console.error('Failed to add category:', error);
//       alert('Failed to add category.');
//     }
//   };

//   return (
//     <div className="admin-container">
//       <div className="admin-header">
//         <h1>Manage Categories</h1>
//         <button
//           onClick={() => setShowForm(!showForm)}
//           className="admin-btn primary"
//         >
//           {showForm ? 'Cancel' : '+ Add Category'}
//         </button>
//       </div>

//       {showForm && (
//         <form onSubmit={handleSubmit} className="admin-form compact">
//           <div className="form-group">
//             <label>Category Name *</label>
//             <input
//               type="text"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Description</label>
//             <textarea
//               value={formData.description}
//               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//               rows="3"
//             />
//           </div>

//           <div className="form-group">
//             <label>Image URL</label>
//             <input
//               type="text"
//               value={formData.image_url}
//               onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
//               placeholder="/img/category.jpg"
//             />
//           </div>

//           <button type="submit" className="submit-btn">Add Category</button>
//         </form>
//       )}

//       <div className="categories-grid">
//         {categories.map(category => (
//           <div key={category.id} className="category-card">
//             {category.image_url && (
//               <img src={category.image_url} alt={category.name} />
//             )}
//             <h3>{category.name}</h3>
//             <p>{category.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageCategories;




















import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productService } from '../../api/productService';
import api from '../../api/axios';
import './Admin.css';

const ManageCategories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image_url: ''
  });

  useEffect(() => {
    // Check admin authentication
    const adminAuth = sessionStorage.getItem('adminAuth');
    if (adminAuth !== 'true') {
      navigate('/admin');
      return;
    }
    loadCategories();
  }, [navigate]);

  const loadCategories = async () => {
    try {
      const data = await productService.getCategories();
      setCategories(data);
    } catch (error) {
      console.error('Failed to load categories:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/products/categories', formData);
      alert('Category added successfully!');
      setFormData({ name: '', description: '', image_url: '' });
      setShowForm(false);
      loadCategories();
    } catch (error) {
      console.error('Failed to add category:', error);
      alert('Failed to add category.');
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Manage Categories</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="admin-btn primary"
        >
          {showForm ? 'Cancel' : '+ Add Category'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="admin-form compact">
          <div className="form-group">
            <label>Category Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              placeholder="/img/category.jpg"
            />
          </div>

          <button type="submit" className="submit-btn">Add Category</button>
        </form>
      )}

      <div className="categories-grid">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            {category.image_url && (
              <img src={category.image_url} alt={category.name} />
            )}
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCategories;








