import Button from "@mui/material/Button";
import { useState } from "react";
import BlogView from "./BlogView";
const Home = () => {
  const [Blogs, setBlogs] = useState([
    {
      id: "1",
      title: "First Day in College",
      body: "Temdsjfljadsjfoodsofdsfhdshf sdhfhdshfhasodhfohdsfkjsandf",
      author: "Mario",
    },
    {
      id: "2",
      title: "Work Blog",
      body: "Temdsjfljadsjfoodsofdsfhdshf sdhfhdshfhasodhfohdsfkjsandf",
      author: "Teacher",
    },
    {
      id: "3",
      title: "Tired Day",
      body: "Temdsjfljadsjfoodsofdsfhdshf sdhfhdshfhasodhfohdsfkjsandf",
      author: "Teacher",
    },
  ]);

  const handleDelete = (id) => {
    let newBlog = Blogs.filter((Blogs) => Blogs.id != id);
    setBlogs(newBlog);
  };
  return (
    <div className="home">
      <BlogView
        blogs={Blogs}
        heading="Recent Blogs"
        handleDelete={handleDelete}
      />
      <BlogView
        blogs={Blogs.filter((Blogs) => Blogs.author === "Teacher")}
        heading="Teacher's Blogs"
      />
    </div>
  );
};

export default Home;
