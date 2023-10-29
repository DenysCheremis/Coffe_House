import { useState } from "react"

import "./searchPanel.scss"

const SearchPanel = (props) => {

    const [term, setTerm] = useState("")

    const onUpdateSearch = (event) => {
        const term = event.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    }

    return (
        <div className="search-panel__wrapper">
            <div className="search-panel__text">Lookiing for</div>
            <input
                className="search-panel__input"
                placeholder="start typing here..."
                type="text"
                value={term}
                onChange={onUpdateSearch} />
        </div>
    )
}

export default SearchPanel;