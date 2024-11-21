import React from "react";
import Line from "./components/Line";
import PointInput from "./components/PointInput";

class App extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            point1: [],
            point2: []
        }
        this.onPointSubmit = this.onPointSubmit.bind(this);
    }

    onPointSubmit = (p1,p2) => {
        this.setState({point1: p1, point2: p2});
    }

    render(){
        const {point1, point2} = this.state;
        return(
            <div>
                <PointInput onPointSubmit={this.onPointSubmit}/>

                {point1 && point2 && <Line point1={point1} point2={point2}/>}
            </div>
        );
    }
}

export default App;