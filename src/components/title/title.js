import "./title.scss"

const Title = ({content, clazz}) => {

    return(
        <>
            <section className={clazz}>
                <div className="coffee__title">{content}</div>
            </section>
        </>
    )
}

export default Title;