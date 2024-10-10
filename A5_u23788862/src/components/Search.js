import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            searchTerm: '' 
        };
    }

    handleInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.searchTerm) {
            this.props.onSearch(this.state.searchTerm);
        }
    }

    render() {
        return (
            <div>
                <h2>Search</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleInputChange} />
                    <br/>
                    <button type="submit">Search</button>
                </form>
            </div>
            
        );
    }
}

export default Search;