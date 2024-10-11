import React from "react";
import ReactDOM from "react-dom";

import PostsList from './components/PostsList';
import react from "react";

class App extends react.Component{
    render(){
        return(
            <div>
                <h1>Posts</h1>
                <PostsList />
            </div>
        );
    }
}

export default App;