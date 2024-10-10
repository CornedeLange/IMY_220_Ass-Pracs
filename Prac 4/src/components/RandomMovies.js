import React from "react";

class RandomMovies extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Random Movie List</h1>
                <ul>
                    {this.props.movies.map((movie, index) => (
                        <li key={index}>
                            <strong> {movie.title}</strong> {movie.description}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default RandomMovies;