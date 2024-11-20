import React from "react";
import ReactDOM from "react-dom";

//import like this when the export is next to the class declaration || if export default, without Curly brackets
import {ImageForm} from "./components/ImageForm";

class App extends React.Component{
    render(){
        return(
            <div>
                {/* <h1>Posts</h1> */}
                <ImageForm/>
            </div>
        );
    }
}

export default App;