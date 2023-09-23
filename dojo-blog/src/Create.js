import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    setIsPending(true);
    e.preventDefault();
    const blog = { title, author, body };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(console.log("Blog added"));
    setIsPending(false);
  };
  return (
    <div className="create">
      <h1>Add New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author</label>
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Mario">Mario</option>
          <option value="luigi">Luigi</option>
        </select>
        <label>Content</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
