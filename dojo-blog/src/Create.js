import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className="create">
      <h1>Add New Blog</h1>
      <form>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author</label>
        <select required>
          <option value="" selected>
            Author
          </option>
          <option value="Mario">Mario</option>
          <option value="luigi">Luigi</option>
        </select>
        <label>Content</label>
        <textarea
          required
          value={content}
          onChange={(e) => setAuthor(e.target.value)}
        ></textarea>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
