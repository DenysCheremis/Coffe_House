import coffeeBeansIconBlack from "../../icons/coffee-beans-title-black.svg"
import coffeePleasureImg from "../../img/pleasure-img.jpg"

import "../coffeeAbout/coffeeAbout.scss"

const PleasureAbout = () => {
    return (
        <section className="coffee-about">
            <div className="container">
                <div className="coffee-about__wrapper">
                    <img src={coffeePleasureImg} alt="About Us" className="coffee-about__img" />
                    <div className="coffee-about__info">
                        <h2 className="title">About our goods</h2>
                        <div className="about__wrapper">
                            <div className="about__divider"></div>
                            <img src={coffeeBeansIconBlack} alt="" className="about__coffe-beans" />
                            <div className="about__divider"></div>
                        </div>
                        <div className="coffee-about__descr">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br /><br />
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.<br />
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </div>
                    </div>
                </div>
                <div className="coffee-about__divider"></div>
            </div>
        </section>
    )
}

export default PleasureAbout;