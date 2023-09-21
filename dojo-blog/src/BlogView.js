const BlogView = ({ blogs, heading, handleDelete }) => {
  return (
    <div className="blog-main">
      <h3>{heading}</h3>
      {blogs.map((blog) => (
        <div className="blog-preview">
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <button
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            Delete Blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogView;
