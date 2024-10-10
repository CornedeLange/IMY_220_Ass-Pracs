import React from "react";
import {Link} from "react-router-dom";

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello Home Page!</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link>
                </nav>

            </div>
        );
    }
}

export default Home;