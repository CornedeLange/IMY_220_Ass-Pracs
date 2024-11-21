import React from "react";
import {useParams, Link} from "react-router-dom";
import Post from "../components/Post";

class Posts extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            posts : [],
            error: null
        }
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount(){
        const id = this.props.params.userId;
        this.fetchPosts(id);
    }

    fetchPosts = async (id) => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

            const data = await response.json();
            const userPosts = data.filter((post) => post.userId == id);
            this.setState({posts: userPosts});

        }catch(error){
            console.error(error.message);
            this.setState({error: error.message});
        }
    }

    render(){
        const {posts, error } = this.state;
        return(
            <div>
                {!error && posts && posts.map((post, index) => (
                    <Post key={index} id={post.id} title={post.title} body={post.body}/>
                ))}
            </div>
        );
    }
}

function WithParams(Component){
    return props => <Component {...props} params={useParams()}/>
}

export default WithParams(Posts);
// export default Posts;