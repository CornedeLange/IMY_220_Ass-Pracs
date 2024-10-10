import React from "react";
import EditPost from "./EditPost";

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isEditing: false,
            title : props.title,
            author: props.author,
            description: props.description

        };
    }

    toggleForm =() => {
        this.setState(prevState => ({
            isEditing: !prevState.isEditing
        }));
    };

    handleUpdate = (title, description) => {
        this.setState({ isEditing: false, title, description });
    };
    
    render(){
        const {isEditing, title, author, description} = this.state;
        return(
            <div>
               <h2>{title}</h2>
               <p>{author}</p>
               <hr/>
               <p>{description}</p>
               <button onClick={this.toggleForm}>Edit Post</button>
               {isEditing && (
                     <EditPost title={title} description={description} onUpdate={this.handleUpdate} />
               )}

            </div>
        );
    }

}

export default Post;