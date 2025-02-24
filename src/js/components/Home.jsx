import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    const auto = setInterval(() => {
      setColor((prevColor) => {
        if (prevColor === "selected red-light") return "selected orange-light";
        if (prevColor === "selected orange-light")
          return "selected green-light";
        return "selected red-light";
      });
    }, 2000);
    return () => clearInterval(auto);
  }, [color]);

  return (
    <div className="container">
      <div className="traffic-top">
        <div className="stick"></div>
      </div>
      <div className="traffic-ligth">
        <div
          className={
            "red" + " " + (color === "red" ? "selected red-light" : "")
          }
          onClick={() => setColor("red")}
        ></div>
        <div
          className={
            "orange" + " " + (color === "orange" ? "selected yellow-light" : "")
          }
          onClick={() => setColor("orange")}
        ></div>
        <div
          className={
            "green" + " " + (color === "green" ? "selected green-light" : "")
          }
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
};

export default Home;
