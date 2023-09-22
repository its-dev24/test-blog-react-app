import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import BlogView from "./BlogView";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data_state: Blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}

      {isPending && <div>Loading ...</div>}

      {Blogs && <BlogView blogs={Blogs} heading="Recent Blogs" />}
      {/* {Blogs && (
        <BlogView
          blogs={Blogs.filter((Blogs) => Blogs.author === "mario")}
          heading="Mario's Blogs"
        />
      )} */}
    </div>
  );
};

export default Home;
