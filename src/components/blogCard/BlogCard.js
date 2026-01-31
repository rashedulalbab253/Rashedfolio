import React from "react";
import "./BlogCard.scss";
import { useHistory } from "react-router-dom";

export default function BlogCard({ blog, isDark, index }) {
  const history = useHistory();

  function openBlogDetail(e) {
    e.preventDefault();
    history.push(`/blog-details/${index}`);
  }

  return (
    <div onClick={openBlogDetail}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <div
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
        >
          {blog.image && (
            <div className="blog-card-image-container">
              <img className="blog-card-image" src={blog.image} alt={blog.title} />
            </div>
          )}
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  );
}
