import HomePageTitle from "../../components/home-page-title/home-page-title";
import HomePageAbout from "../../components/home-page-about/home-page-about";
import HomeBest from "../../components/home-best/home-best";

import "./home-page.scss";


const Homepage = (props) => {

    return(
        <>
            <HomePageTitle/>
            <HomePageAbout/>
            <HomeBest products={props.productsBest}/>
        </>
    )
}

export default Homepage;