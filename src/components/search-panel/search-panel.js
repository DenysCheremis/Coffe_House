import { Component } from "react";

import "./search-panel.scss"

class SearchPanel extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: ""
        }
    }

    onUpdateSearch = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render(){
        return(
            <div className="search-panel__wrapper">
                    <div className="search-panel__text">Lookiing for</div>
                    <input 
                        className="search-panel__input" 
                        placeholder="start typing here..." 
                        type="text"
                        value={this.state.term}
                        onChange={this.onUpdateSearch}/>
            </div>
        )
    }
}

export default SearchPanel;