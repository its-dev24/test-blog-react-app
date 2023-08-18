import Button from "@mui/material/Button";
import { useState } from "react";
const Home = () => {
  const [Blogs, setBlogs] = useState([
    {
      title: "First Day in College",
      body: "Temdsjfljadsjfoodsofdsfhdshf sdhfhdshfhasodhfohdsfkjsandf",
      author: "Mario",
    },
    {
      title: "Work Blog",
      body: "Temdsjfljadsjfoodsofdsfhdshf sdhfhdshfhasodhfohdsfkjsandf",
      author: "Teacher",
    },
    {
      title: "Tired Day",
      body: "Temdsjfljadsjfoodsofdsfhdshf sdhfhdshfhasodhfohdsfkjsandf",
      author: "Ann",
    },
  ]);
  return (
    <div className="home">
      {Blogs.map((blog) => (
        <div className="blog-preview">
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
