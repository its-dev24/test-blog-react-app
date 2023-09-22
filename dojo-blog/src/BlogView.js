import { Link } from "react-router-dom";

const BlogView = ({ blogs, heading }) => {
  return (
    <div className="blog-main">
      <h3>{heading}</h3>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogView;
