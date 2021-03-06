import React, { Component } from 'react';

class GridSearch extends Component {
    
    handleChange(e) {
        const search = e.target.value
        this.props.updateSearch(search);
        this.props.updateSearchResults();
    }

    render() {
        return (
            <div className="search-wrapper">
                <div className={`search-bar`}>
                    <form action="">
                        <input
                            type="text"
                            placeholder='Search..'
                            defaultValue=''
                            onKeyUp={(e) => { this.handleChange(e) }}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default GridSearch;