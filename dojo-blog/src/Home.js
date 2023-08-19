import Button from "@mui/material/Button";
import { useState } from "react";
import BlogView from "./BlogView";
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
      author: "Teacher",
    },
  ]);
  return (
    <div className="home">
      <BlogView blogs={Blogs} heading="Recent Blogs" />
      <BlogView
        blogs={Blogs.filter((Blogs) => Blogs.author === "Teacher")}
        heading="Teacher's Blogs"
      />
    </div>
  );
};

export default Home;
