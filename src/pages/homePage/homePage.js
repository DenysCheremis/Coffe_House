import { Helmet } from "react-helmet";

import HomePageTitle from "../../components/homePageTitle/HomePageTitle";
import HomePageAbout from "../../components/homePageAbout/HomePageAbout";
import HomeBest from "../../components/homeBest/HomeBest";

const Homepage = (props) => {

    return (
        <>
            <Helmet>
                <meta name="description" content="Coffee House" />
                <title>Coffee House</title>
            </Helmet>
            <HomePageTitle />
            <HomePageAbout />
            <HomeBest />
        </>
    )
}

export default Homepage;