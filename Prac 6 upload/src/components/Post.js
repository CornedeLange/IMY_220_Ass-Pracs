import React from "react";

class Post extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {id, title, body} = this.props;
        return(
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
                <p>{id}</p>
            </div>
        );
    }
}

export default Post;