const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>E-Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f2135d",
            borderRadius: "6px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
