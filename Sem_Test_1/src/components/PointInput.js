import React from "react";
import PropTypes  from "prop-types";

class PointInput extends React.Component{
    constructor(props){
        super(props);

        this.point1Ref = React.createRef();
        this.point2Ref = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const p1 = this.point1Ref.current.value;
        const p2 = this.point2Ref.current.value;

        const point1 = p1.split(";").map(Number) ;
        const point2 = p2.split(";").map(Number);

        this.props.onPointSubmit(point1,point2);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="point1">Point 1:</label>
                    <input type="text" id="point1" name="point1" ref={this.point1Ref}></input><br/>
                    <label htmlFor="point1">Point 2:</label>
                    <input type="text" id="point2" name="point2" ref={this.point2Ref}></input><br/>
                    <button type="submit">Calculate</button>
                </form>
            </div>
        );
    }
}

PointInput.propTypes = {
    onPointSubmit : PropTypes.func.isRequired
}

export default PointInput;