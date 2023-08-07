import Title from "../../components/title/title";
import PleasureAbout from "../../components/pleasure-about/pleasure-about";
import CoffeeList from "../../components/coffee-list/coffee-list";

const ForYourPleasure = (props) => {
    const {products} = props

    return(
        <>
            <Title 
                content="For your pleasure"
                clazz="coffee_pleasure"/>
            <PleasureAbout/>
            <CoffeeList products={products}/>
        </>
    )
}

export default ForYourPleasure;