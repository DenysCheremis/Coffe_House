import { Helmet } from "react-helmet";

import HomePageTitle from "../../components/homePageTitle/HomePageTitle";
import HomePageAbout from "../../components/homePageAbout/HomePageAbout";
import HomeBest from "../../components/homeBest/HomeBest";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Homepage = () => {

    return (
        <>
            <Helmet>
                <meta name="description" content="Coffee House" />
                <title>Coffee House</title>
            </Helmet>
            <Header />
            <HomePageTitle />
            <HomePageAbout />
            <HomeBest />
            <Footer />
        </>
    )
}

export default Homepage;