// import { useState } from 'react';
// import BlogCard from '../components/BlogCard.jsx';
// import { blogPosts } from '../data/blogPosts.js';
// import useRevealOnScroll from '../hooks/useRevealOnScroll.js';

// export default function Blog() {
//   const recent = blogPosts.slice(0, 4);
//   const [query, setQuery] = useState('');

//   useRevealOnScroll('.blog-card');

//   return (
//     <>
//       <section id="blog-hero">
//         <div className="blog-hero-content">
//           <h1>Our Fashion Blog</h1>
//           <p>Expert insights, style guides, and the latest trends in men&apos;s fashion</p>
//         </div>
//       </section>

//       <section id="blog-content" className="section-p1">
//         <div className="blog-container">
//           <div className="blog-main">
//             {blogPosts.map((post) => (
//               <BlogCard key={post.id} post={post} />
//             ))}

//             <div className="blog-pagination">
//               <a href="#" className="pagination-btn active">
//                 1
//               </a>
//               <a href="#" className="pagination-btn">
//                 2
//               </a>
//               <a href="#" className="pagination-btn">
//                 3
//               </a>
//               <a href="#" className="pagination-btn" aria-label="Next page">
//                 <i className="fa-solid fa-arrow-right" />
//               </a>
//             </div>
//           </div>

//           <aside className="blog-sidebar">
//             <div className="sidebar-widget">
//               <h3>Search</h3>
//               <div className="search-box">
//                 <input
//                   type="text"
//                   placeholder="Search articles..."
//                   id="blog-search"
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   onKeyDown={(e) => {
//                     if (e.key === 'Enter') {
//                       e.preventDefault();
//                       const q = query.trim();
//                       if (q) alert(`Search UI demo: "${q}"`);
//                     }
//                   }}
//                 />
//                 <button
//                   type="button"
//                   aria-label="Search"
//                   onClick={() => {
//                     const q = query.trim();
//                     if (q) alert(`Search UI demo: "${q}"`);
//                   }}
//                 >
//                   <i className="fa-solid fa-magnifying-glass" />
//                 </button>
//               </div>
//             </div>

//             <div className="sidebar-widget">
//               <h3>Categories</h3>
//               <ul className="categories-list">
//                 <li>
//                   <a href="#">
//                     <i className="fa-solid fa-chevron-right" /> Fashion <span>(12)</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="fa-solid fa-chevron-right" /> Style Guide <span>(8)</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="fa-solid fa-chevron-right" /> Sustainability <span>(6)</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="fa-solid fa-chevron-right" /> Accessories <span>(10)</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="fa-solid fa-chevron-right" /> Trends <span>(15)</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="fa-solid fa-chevron-right" /> Tips &amp; Tricks <span>(9)</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div className="sidebar-widget">
//               <h3>Recent Posts</h3>
//               <div className="recent-posts">
//                 {recent.map((p) => (
//                   <div className="recent-post-item" key={p.id}>
//                     <img src={p.image} alt={p.title} />
//                     <div className="recent-post-content">
//                       <h4>
//                         <a href="#">{p.title}</a>
//                       </h4>
//                       <span className="recent-post-date">{p.date}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="sidebar-widget newsletter-widget">
//               <h3>Subscribe to Newsletter</h3>
//               <p>
//                 Stay updated with the latest fashion trends, style tips, and exclusive offers
//                 delivered directly to your inbox.
//               </p>
//               <form
//                 className="sidebar-newsletter"
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   const email = e.currentTarget.elements?.[0]?.value?.trim();
//                   if (email) alert(`Thanks for subscribing (demo): ${email}`);
//                   e.currentTarget.reset();
//                 }}
//               >
//                 <input type="email" placeholder="Your email address" required />
//                 <button type="submit">Subscribe</button>
//               </form>
//             </div>
//           </aside>
//         </div>
//       </section>
//     </>
//   );
// }



































import { useState } from 'react';
import BlogCard from '../components/BlogCard.jsx';
import { blogPosts } from '../data/blogPosts.js';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';

export default function Blog() {
  const recent = blogPosts.slice(0, 4);
  const [query, setQuery] = useState('');

  useRevealOnScroll('.blog-card');

  return (
    <>
      {/* Full Page Background */}
      <div
        style={{
          backgroundImage: 'url(/img/updation/blog-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',
          minHeight: '100vh'
        }}
      >
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0
        }}></div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <section id="blog-hero">
            <div className="blog-hero-content">
              <h1 style={{ color: 'white' }}>Our Fashion Blog</h1>
              <p style={{ color: 'white' }}>Expert insights, style guides, and the latest trends in men&apos;s fashion</p>
            </div>
          </section>

          <section id="blog-content" className="section-p1">
            <div className="blog-container">
              <div className="blog-main">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}

                <div className="blog-pagination">
                  <a href="#" className="pagination-btn active">
                    1
                  </a>
                  <a href="#" className="pagination-btn">
                    2
                  </a>
                  <a href="#" className="pagination-btn">
                    3
                  </a>
                  <a href="#" className="pagination-btn" aria-label="Next page">
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>

              <aside className="blog-sidebar">
                <div className="sidebar-widget">
                  <h3>Search</h3>
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      id="blog-search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          const q = query.trim();
                          if (q) alert(`Search UI demo: "${q}"`);
                        }
                      }}
                    />
                    <button
                      type="button"
                      aria-label="Search"
                      onClick={() => {
                        const q = query.trim();
                        if (q) alert(`Search UI demo: "${q}"`);
                      }}
                    >
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                  </div>
                </div>

                <div className="sidebar-widget">
                  <h3>Categories</h3>
                  <ul className="categories-list">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-chevron-right" /> Fashion <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-chevron-right" /> Style Guide <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-chevron-right" /> Sustainability <span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-chevron-right" /> Accessories <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-chevron-right" /> Trends <span>(15)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-chevron-right" /> Tips &amp; Tricks <span>(9)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h3>Recent Posts</h3>
                  <div className="recent-posts">
                    {recent.map((p) => (
                      <div className="recent-post-item" key={p.id}>
                        <img src={p.image} alt={p.title} />
                        <div className="recent-post-content">
                          <h4>
                            <a href="#">{p.title}</a>
                          </h4>
                          <span className="recent-post-date">{p.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sidebar-widget newsletter-widget">
                  <h3>Subscribe to Newsletter</h3>
                  <p>
                    Stay updated with the latest fashion trends, style tips, and exclusive offers
                    delivered directly to your inbox.
                  </p>
                  <form
                    className="sidebar-newsletter"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const email = e.currentTarget.elements?.[0]?.value?.trim();
                      if (email) alert(`Thanks for subscribing (demo): ${email}`);
                      e.currentTarget.reset();
                    }}
                  >
                    <input type="email" placeholder="Your email address" required />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

