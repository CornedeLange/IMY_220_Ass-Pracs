import React from 'react';
// import ReactDOM from "react-dom/client";
import { getCharacterById, searchCharacterByName } from '../../api';
import Person from './Person';
import Search from './Search';

class StarWars extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            character: null,
            currentId: 1,
            error: null,
        };
    }

    componentDidMount() {
        this.fetchCharacterById(1);
    }

    fetchCharacterById = async (id) => {
        // const character = await getCharacterById(id);
        // this.setState({ character, currentId: id });

        const { character, error } = await getCharacterById(id);
        this.setState({ character, error, currentId: id });
    }

    fetchCharacterByName = async (name) => {
        // const character = await searchCharacterByName(name);
        // this.setState({ character });
        const { character, error } = await searchCharacterByName(name);
        this.setState({ character, error });
    }

    handleNext = () => {
        const { currentId } = this.state;
        if (currentId < 83) {
            this.fetchCharacterById(currentId + 1);
        }
    }

    handlePrevious = () => {
        const { currentId } = this.state;
        if (currentId > 1) {
            this.fetchCharacterById(currentId - 1);
        }
    }

    render() {
        const { character, error } = this.state;

        return (
            <div className="star-wars-app">
                <h1>Activity Feed</h1>
                <Search onSearch={this.fetchCharacterByName} />
                <div>
                    <button onClick={this.handlePrevious} disabled={this.state.currentId === 1}>Previous</button>
                    <button onClick={this.handleNext}>Next</button>
                </div>

                {error && <div className="error-message">Error: {error}</div>}
                {character && <Person character={character} />}
            </div>
        );
    }
}

export default StarWars;
