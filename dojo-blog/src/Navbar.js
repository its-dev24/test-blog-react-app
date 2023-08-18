const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>welcome to dojo blog</h1>
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
          Create
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
