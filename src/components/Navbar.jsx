import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';

const navLinkClass = ({ isActive }) => (isActive ? 'active' : undefined);

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    setMobileOpen(false);
    navigate('/');
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <section id="header">
        <NavLink to="/" onClick={closeMobile}>
          <img src="/img/updation/hqlogo3.png" alt="HQ"
            style={{
              width: '80px', 
              height: 'auto', 
              objectFit: 'contain'
            }} />
        </NavLink>

        {/* Hamburger Button - only on mobile */}
        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>

        {/* Nav Menu */}
        <div className={`nav-wrapper ${mobileOpen ? 'mobile-open' : ''}`}>
          {/* Close overlay on mobile */}
          {mobileOpen && (
            <div className="nav-overlay" onClick={closeMobile}></div>
          )}

          <ul id="navbar" className={mobileOpen ? 'mobile-open' : ''}>
            <li>
              <NavLink to="/" className={navLinkClass} end onClick={closeMobile}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={navLinkClass} onClick={closeMobile}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={navLinkClass} onClick={closeMobile}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass} onClick={closeMobile}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass} onClick={closeMobile}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" className={navLinkClass} onClick={closeMobile}>
                Admin
              </NavLink>
            </li>

            {/* Cart */}
            <li id="lg-bag">
              <NavLink to="/cart" onClick={closeMobile} style={{ position: 'relative' }}>
                <i className="fa-solid fa-cart-shopping" />
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </NavLink>
            </li>

            {/* Auth */}
            {isAuthenticated ? (
              <li className="user-li">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="user-btn"
                >
                  <i className="fa-solid fa-user"></i>
                  <span>{user?.username}</span>
                  <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px' }}></i>
                </button>

                {showUserMenu && (
                  <div className="user-dropdown">
                    <NavLink
                      to="/orders"
                      onClick={() => { setShowUserMenu(false); closeMobile(); }}
                    >
                      📦 My Orders
                    </NavLink>
                    <button onClick={handleLogout}>
                      🚪 Logout
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="login-nav-btn"
                  onClick={closeMobile}
                >
                  <i className="fa-solid fa-user"></i> Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}


























