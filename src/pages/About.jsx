import Menu from "../components/Nav"
import "../css/About.css"
import Hero from "../components/Hero";
import img from "../assets/image//product 2.webp"

import React from "react";

const About = () => {

    // JSX
  const myJsx = <h3>This is awesome JSX</h3>

  // myFavFood
  const food = ["amala", "tuwo", "jollof", "spaghetti"]

  const myStyle = {listStyle: "none", color: "orange", backgroundColor: "#eee", width: "50%", marginInline: "auto", borderRadius: "10px"}
  
  return (
    <div>
      {/* <Menu/> */}
      <Hero heading="Welcome to about page" image={img}/>
      <div>
        <h1>Shinel's React App 1.0</h1>
        {myJsx}
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis soluta
        dicta, doloremque officia nisi dolorum sed placeat nihil aliquid optio.
      </p>

      {/* map through food array */}
      <h3>My favourite food</h3>
      {food.map((f, index) => {
        return (
          <div className="" key={index} style={myStyle}>
            <p>My favourite food is {f}</p>
          </div>
        );

      })}
    </div>
  );
};

export default About;