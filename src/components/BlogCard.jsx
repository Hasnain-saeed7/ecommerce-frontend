export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
        <span className="blog-category">{post.category}</span>
      </div>
      <div className="blog-card-content">
        <h2>{post.title}</h2>
        <p className="blog-excerpt">{post.excerpt}</p>
        <div className="blog-meta">
          <span className="blog-author">
            <i className="fa-solid fa-user" /> {post.author}
          </span>
          <span className="blog-date">
            <i className="fa-solid fa-calendar" /> {post.date}
          </span>
        </div>
        {/* UI only - no blog detail pages yet */}
        <a href="#" className="blog-read-more">
          Read More <i className="fa-solid fa-arrow-right" />
        </a>
      </div>
    </article>
  );
}

