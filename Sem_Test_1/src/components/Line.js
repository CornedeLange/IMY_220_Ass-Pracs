import React from "react";
import PropTypes from "prop-types";

class Line extends React.Component{
    constructor(props){
        super(props);

        this.getEuclideanDistance = this.getEuclideanDistance.bind(this);
    }

    getEuclideanDistance = () => {
        const {point1, point2} = this.props;
        console.log("Made here");
        console.log("point1", point1);
        const distance = point1.reduce((acc, curr, index) => {
            return acc + Math.pow(curr - point2[index],2);
        },0);

        const finalDistance = Math.sqrt(distance);

        return finalDistance;
    }

    render(){
        const {point1, point2} = this.props;
        return(
            <div>
                <p>Point 1: {point1.join(";")}</p>
                <p>Point 2: {point2.join(";")}</p>
                <p>Dimension: {point1.length}</p>
                <p>Euclidean Distance: {this.getEuclideanDistance().toFixed(2)}</p>
            </div>
        );
    }
}

Line.propTypes = {
    point1 : PropTypes.arrayOf(PropTypes.number).isRequired,
    point2 : PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Line;