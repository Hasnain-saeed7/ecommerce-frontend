// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { productService } from '../../api/productService';
// import api from '../../api/axios';
// import './Admin.css';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';


// const AddProduct = () => {
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [variants, setVariants] = useState([
//     { size: 'S', color: 'Black', color_code: '#000000', stock: 0, sku: '' }
//   ]);

//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     discount_price: '',
//     brand: '',
//     material: '',
//     gender: 'Men',
//     subcategory: '',
//     main_image: '',
//     image_2: '',
//     image_3: '',
//     image_4: '',
//     category_id: '',
//     is_featured: false,
//     is_new_arrival: false,
//     is_bestseller: false,
//   });

//   useEffect(() => {
//     loadCategories();
//   }, []);

//   const loadCategories = async () => {
//     try {
//       const data = await productService.getCategories();
//       setCategories(data);
//       if (data.length > 0) {
//         setFormData(prev => ({ ...prev, category_id: data[0].id }));
//       }
//     } catch (error) {
//       console.error('Failed to load categories:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleVariantChange = (index, field, value) => {
//     const newVariants = [...variants];
//     newVariants[index][field] = value;
//     setVariants(newVariants);
//   };

//   const addVariant = () => {
//     setVariants([...variants, { 
//       size: 'M', 
//       color: 'Black', 
//       color_code: '#000000', 
//       stock: 0, 
//       sku: '' 
//     }]);
//   };

//   const removeVariant = (index) => {
//     setVariants(variants.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const productData = {
//         ...formData,
//         price: parseFloat(formData.price),
//         discount_price: formData.discount_price ? parseFloat(formData.discount_price) : null,
//         category_id: parseInt(formData.category_id),
//         variants: variants.map(v => ({
//           ...v,
//           stock: parseInt(v.stock)
//         }))
//       };

//       await api.post('/products', productData);
//       alert('Product added successfully!');
//       navigate('/admin/products');
//     } catch (error) {
//       console.error('Failed to add product:', error);
//       alert('Failed to add product. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="admin-container">
//       <h1>Add New Product</h1>
      
//       <form onSubmit={handleSubmit} className="admin-form">
//         {/* Basic Information */}
//         <div className="form-section">
//           <h3>Basic Information</h3>
          
//           <div className="form-group">
//             <label>Product Name *</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="4"
//             />
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Price *</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 step="0.01"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Discount Price</label>
//               <input
//                 type="number"
//                 name="discount_price"
//                 value={formData.discount_price}
//                 onChange={handleChange}
//                 step="0.01"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Brand</label>
//               <input
//                 type="text"
//                 name="brand"
//                 value={formData.brand}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>Material</label>
//               <input
//                 type="text"
//                 name="material"
//                 value={formData.material}
//                 onChange={handleChange}
//                 placeholder="e.g., Cotton, Denim"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Gender *</label>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="Men">Men</option>
//                 <option value="Women">Women</option>
//                 <option value="Kids">Kids</option>
//                 <option value="Unisex">Unisex</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Category *</label>
//               <select
//                 name="category_id"
//                 value={formData.category_id}
//                 onChange={handleChange}
//                 required
//               >
//                 {categories.map(cat => (
//                   <option key={cat.id} value={cat.id}>{cat.name}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Subcategory</label>
//               <input
//                 type="text"
//                 name="subcategory"
//                 value={formData.subcategory}
//                 onChange={handleChange}
//                 placeholder="e.g., T-Shirts, Jeans"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Images */}
//         <div className="form-section">
//           <h3>Product Images (URLs)</h3>
          
//           <div className="form-group">
//             <label>Main Image URL *</label>
//             <input
//               type="text"
//               name="main_image"
//               value={formData.main_image}
//               onChange={handleChange}
//               placeholder="/img/product-1.jpg"
//               required
//             />
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Image 2</label>
//               <input
//                 type="text"
//                 name="image_2"
//                 value={formData.image_2}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>Image 3</label>
//               <input
//                 type="text"
//                 name="image_3"
//                 value={formData.image_3}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>Image 4</label>
//               <input
//                 type="text"
//                 name="image_4"
//                 value={formData.image_4}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Variants */}
//         <div className="form-section">
//           <h3>Product Variants (Size & Color)</h3>
          
//           {variants.map((variant, index) => (
//             <div key={index} className="variant-row">
//               <div className="form-group">
//                 <label>Size</label>
//                 <input
//                   type="text"
//                   value={variant.size}
//                   onChange={(e) => handleVariantChange(index, 'size', e.target.value)}
//                   placeholder="S, M, L, XL"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Color</label>
//                 <input
//                   type="text"
//                   value={variant.color}
//                   onChange={(e) => handleVariantChange(index, 'color', e.target.value)}
//                   placeholder="Black, White"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Color Code</label>
//                 <input
//                   type="color"
//                   value={variant.color_code}
//                   onChange={(e) => handleVariantChange(index, 'color_code', e.target.value)}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Stock</label>
//                 <input
//                   type="number"
//                   value={variant.stock}
//                   onChange={(e) => handleVariantChange(index, 'stock', e.target.value)}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>SKU</label>
//                 <input
//                   type="text"
//                   value={variant.sku}
//                   onChange={(e) => handleVariantChange(index, 'sku', e.target.value)}
//                   placeholder="TS-BLK-M-001"
//                 />
//               </div>

//               {variants.length > 1 && (
//                 <button
//                   type="button"
//                   onClick={() => removeVariant(index)}
//                   className="remove-btn"
//                 >
//                   Remove
//                 </button>
//               )}
//             </div>
//           ))}

//           <button type="button" onClick={addVariant} className="add-variant-btn">
//             + Add Variant
//           </button>
//         </div>

//         {/* Badges */}
//         <div className="form-section">
//           <h3>Product Badges</h3>
          
//           <div className="form-checkboxes">
//             <label className="checkbox-label">
//               <input
//                 type="checkbox"
//                 name="is_featured"
//                 checked={formData.is_featured}
//                 onChange={handleChange}
//               />
//               Featured Product
//             </label>

//             <label className="checkbox-label">
//               <input
//                 type="checkbox"
//                 name="is_new_arrival"
//                 checked={formData.is_new_arrival}
//                 onChange={handleChange}
//               />
//               New Arrival
//             </label>

//             <label className="checkbox-label">
//               <input
//                 type="checkbox"
//                 name="is_bestseller"
//                 checked={formData.is_bestseller}
//                 onChange={handleChange}
//               />
//               Bestseller
//             </label>
//           </div>
//         </div>

//         <div className="form-actions">
//           <button
//             type="button"
//             onClick={() => navigate('/admin/products')}
//             className="cancel-btn"
//           >
//             Cancel
//           </button>
//           <button type="submit" disabled={loading} className="submit-btn">
//             {loading ? 'Adding...' : 'Add Product'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProduct; 



















import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productService } from '../../api/productService';
import api from '../../api/axios';
import './Admin.css';

const AddProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [variants, setVariants] = useState([
    { size: 'S', color: 'Black', color_code: '#000000', stock: 0, sku: '' }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    discount_price: '',
    brand: '',
    material: '',
    gender: 'Men',
    subcategory: '',
    main_image: '',
    image_2: '',
    image_3: '',
    image_4: '',
    category_id: '',
    is_featured: false,
    is_new_arrival: false,
    is_bestseller: false,
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
      if (data.length > 0) {
        setFormData(prev => ({ ...prev, category_id: data[0].id }));
      }
    } catch (error) {
      console.error('Failed to load categories:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleVariantChange = (index, field, value) => {
    const newVariants = [...variants];
    newVariants[index][field] = value;
    setVariants(newVariants);
  };

  const addVariant = () => {
    setVariants([...variants, { 
      size: 'M', 
      color: 'Black', 
      color_code: '#000000', 
      stock: 0, 
      sku: '' 
    }]);
  };

  const removeVariant = (index) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        discount_price: formData.discount_price ? parseFloat(formData.discount_price) : null,
        category_id: parseInt(formData.category_id),
        variants: variants.map(v => ({
          ...v,
          stock: parseInt(v.stock)
        }))
      };

      await api.post('/products', productData);
      alert('Product added successfully!');
      navigate('/admin/products');
    } catch (error) {
      console.error('Failed to add product:', error);
      alert('Failed to add product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1>Add New Product</h1>
      
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-section">
          <h3>Basic Information</h3>
          
          <div className="form-group">
            <label>Product Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Price *</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                step="0.01"
                required
              />
            </div>

            <div className="form-group">
              <label>Discount Price</label>
              <input
                type="number"
                name="discount_price"
                value={formData.discount_price}
                onChange={handleChange}
                step="0.01"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Brand</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Material</label>
              <input
                type="text"
                name="material"
                value={formData.material}
                onChange={handleChange}
                placeholder="e.g., Cotton, Denim"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Gender *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
                <option value="Unisex">Unisex</option>
              </select>
            </div>

            <div className="form-group">
              <label>Category *</label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                required
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Subcategory</label>
              <input
                type="text"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                placeholder="e.g., T-Shirts, Jeans"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Product Images (URLs)</h3>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
            Use paths like: /img/products/f1.jpg, /img/products/f2.jpg, etc.
          </p>
          
          <div className="form-group">
            <label>Main Image URL *</label>
            <input
              type="text"
              name="main_image"
              value={formData.main_image}
              onChange={handleChange}
              placeholder="/img/products/f1.jpg"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Image 2</label>
              <input
                type="text"
                name="image_2"
                value={formData.image_2}
                onChange={handleChange}
                placeholder="/img/products/f2.jpg"
              />
            </div>

            <div className="form-group">
              <label>Image 3</label>
              <input
                type="text"
                name="image_3"
                value={formData.image_3}
                onChange={handleChange}
                placeholder="/img/products/f3.jpg"
              />
            </div>

            <div className="form-group">
              <label>Image 4</label>
              <input
                type="text"
                name="image_4"
                value={formData.image_4}
                onChange={handleChange}
                placeholder="/img/products/f4.jpg"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Product Variants (Size & Color)</h3>
          
          {variants.map((variant, index) => (
            <div key={index} className="variant-row">
              <div className="form-group">
                <label>Size</label>
                <input
                  type="text"
                  value={variant.size}
                  onChange={(e) => handleVariantChange(index, 'size', e.target.value)}
                  placeholder="S, M, L, XL"
                />
              </div>

              <div className="form-group">
                <label>Color</label>
                <input
                  type="text"
                  value={variant.color}
                  onChange={(e) => handleVariantChange(index, 'color', e.target.value)}
                  placeholder="Black, White"
                />
              </div>

              <div className="form-group">
                <label>Color Code</label>
                <input
                  type="color"
                  value={variant.color_code}
                  onChange={(e) => handleVariantChange(index, 'color_code', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Stock</label>
                <input
                  type="number"
                  value={variant.stock}
                  onChange={(e) => handleVariantChange(index, 'stock', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>SKU</label>
                <input
                  type="text"
                  value={variant.sku}
                  onChange={(e) => handleVariantChange(index, 'sku', e.target.value)}
                  placeholder="TS-BLK-M-001"
                />
              </div>

              {variants.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeVariant(index)}
                  className="remove-btn"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button type="button" onClick={addVariant} className="add-variant-btn">
            + Add Variant
          </button>
        </div>

        <div className="form-section">
          <h3>Product Badges</h3>
          
          <div className="form-checkboxes">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="is_featured"
                checked={formData.is_featured}
                onChange={handleChange}
              />
              Featured Product
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="is_new_arrival"
                checked={formData.is_new_arrival}
                onChange={handleChange}
              />
              New Arrival
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="is_bestseller"
                checked={formData.is_bestseller}
                onChange={handleChange}
              />
              Bestseller
            </label>
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={() => navigate('/admin/products')}
            className="cancel-btn"
          >
            Cancel
          </button>
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Adding...' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct; 





































