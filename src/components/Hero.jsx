import React from 'react'
import hero from "../assets/image/3_pt_rowing_machines.webp"

const Hero = (props) => {
    // destructuring props
    const {heading="Breezy's World", image} = props
  return (
    <div style={{backgroundColor: "purple", color: "white"}}>
        <div className="">
            <img src={image} alt="" height="200px" />
        </div>
        {/* <h1>Welcome To My Life</h1> */}
        <h1>{heading}</h1>
    </div>
  )
}

export default Hero