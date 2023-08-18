import Button from "@mui/material/Button";
import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("jadhu");

  const changeDetails = (name) => {
    setName(name);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <h3>{name} is an MCA Student</h3>
      <Button variant="contained" onClick={() => changeDetails("Shijin")}>
        Click
      </Button>
    </div>
  );
};

export default Home;
