import img1 from "../assets/image/Rower-Lena.jpg"
import Menu from "../components/Nav"
import Spin from "../components/Loader"
import "../css/Home.css"
import Hero from "../components/Hero"
import ProductCard from "../components/ProductCard"
import {Nav} from 'react-bootstrap'
function Home () {
    return( 
    <>
    {/* <Menu/> */}
    {/* <Spin/> */}
    <Hero heading="Welcome Home" image={img1}/>
    <ProductCard/>
    {/* <h1 className="bg-warning text-light
    " style={{borderRadius: "10px"}}>Welcome to Home page</h1> */}
    <div className="" style={{backgroundColor: "pink", height: "700px", borderRadius: "15px"}}>
        <img src={img1} alt="" />
    </div>
    </>
    )
} 

export default Home