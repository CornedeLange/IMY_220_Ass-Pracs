import React from 'react';

class Person extends React.Component {
    render() {
        const { character } = this.props;

        if (character.error) 
        {
            return <div className="error">{character.error}</div>;
        }

        return (
            <div className="person-details">
                <h2>Person</h2>
                <h3>{character.name}</h3>
                <p><strong>Birth Year:</strong> {character.birth_year}</p>
                <p><strong>Eye Color:</strong> {character.eye_color}</p>
                <p><strong>Gender:</strong> {character.gender}</p>
                <p><strong>Homeworld:</strong> {character.homeworld}</p>
            </div>
        );
    }
}

export default Person;