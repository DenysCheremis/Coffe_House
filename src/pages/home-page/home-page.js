import HomePageTitle from "../../components/home-page-title/home-page-title";
import HomePageAbout from "../../components/home-page-about/home-page-about";
import HomeBest from "../../components/home-best/home-best";

import solimoImage from "../../img/items-img/solimo.jpg";
import prestoImage from "../../img/items-img/presto.jpg";
import aromaticoImage from "../../img/items-img/aromatico.jpg";

import "./home-page.scss";


const Homepage = () => {
    
    const productsBest = [
        {img: solimoImage, name:"Solimo Coffee Beans 2 kg", price:"10.73", id: 1},
        {img: prestoImage, name:"Presto Coffee Beans 1 kg", price:"15.99", id: 2},
        {img: aromaticoImage, name:"AROMISTICO Coffee 1 kg", price:"6.99", id: 3}
    ]

    return(
        <>
            <HomePageTitle/>
            <HomePageAbout/>
            <HomeBest products={productsBest}/>
        </>
    )
}

export default Homepage;