import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Newsletter from './Newsletter.jsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Layout({ children, showNewsletter = true }) {
  const location = useLocation();

  // Match multi-page behavior: each navigation starts at top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {showNewsletter ? <Newsletter /> : null}
      <Footer />
    </>
  );
}

