import "./filter.scss"

const Filter = (props) => {

    const btnData = [
        {name: "Brazil"},
        {name: "Kenya"},
        {name: "Columbia"}
    ]

    const buttons = btnData.map(({name}) => {
        const active = props.filter === name;
        const clazz = active ? "btn_active" : "btn"

        return(
            <button 
                type="button"
                className={clazz}
                key={name}
                onClick={() => props.onFilterSelect(name)}
                >
                {name}
            </button>
        )
    }) 

    return(
        <div className="filter">
                <div className="filter__text">Or filter</div>
                <div className="filter__btn-group">
                    <button 
                        className="btn_close-filter"
                        onClick={() => props.onFilterSelect('')}></button>
                    {buttons}
                </div>
        </div>
    )
}

export default Filter;