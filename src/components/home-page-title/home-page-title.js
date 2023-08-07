import coffeeBeansIcon from "../../icons/coffee-beans-title.svg"
import { Link } from 'react-router-dom';
import "./home-page-title.scss";

const HomePageTitle = () => {
    return(
        <section className="home">
            <div className="container">
                <h1 className="home__title">Everything You Love About Coffee</h1>
                <div className="home__wrapper">
                    <div className="home__divider"></div>
                    <img src={coffeeBeansIcon} alt="" className="home__coffe-beans"/>
                    <div className="home__divider"></div>
                </div>
                <h2 className="home__subtitle">We makes every day full of energy and taste <br/> 
                Want to try our beans?</h2>
                <Link to="/our-coffee">
                    <button className="home__btn">More</button>
                </Link>
            </div>
        </section>
    )
}

export default HomePageTitle;