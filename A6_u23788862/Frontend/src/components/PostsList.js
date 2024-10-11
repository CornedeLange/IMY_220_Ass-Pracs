import React from 'react';
import Post from './Post';

class PostsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        this.fetchPosts();
    }

    async fetchPosts(){
        try{
            const res = await fetch('/api/posts');
            const posts = await res.json();
            this.setState({posts});
        }
        catch(error){
            console.error(error);
        }
    }

    handleDelete = async (postId) => {
        try {
            await fetch(`/api/posts/${postId}`, {
              method: 'DELETE',
            });

            this.setState(prevState => ({
              posts: prevState.posts.filter(post => post.id !== postId)
            }));
          } catch (error) {
            console.error('Error deleting post:', error);
          }
    }

    // Handle updating a post
    handleUpdate = async (postId, updatedPost) => {
        try {
        await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPost),
        });

        this.setState(prevState => ({
            posts: prevState.posts.map(post =>
            post.id === postId ? updatedPost : post
            )
        }));
        } catch (error) {
        console.error('Error updating post:', error);
        }
    };

    // Handle updating a comment
    handleCommentUpdate = async (postId, updatedComments) => {
        try {
            for (let i = 0; i < updatedComments.length; i++) {
                const comment = updatedComments[i].comment;
                await fetch(`/api/posts/${postId}/comments/${i}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ comment }),
                });
            }

            this.setState(prevState => ({
                posts: prevState.posts.map(post =>
                    post.id === postId ? { ...post, comments: updatedComments } : post
                )
            }));
        } catch (error) {
            console.error('Error updating comment:', error);
        }
    };

    render(){
        return(
            <div className="posts">
                <h2>Posts</h2>
                <div>
                    {this.state.posts.map(post => (
                        <Post
                        key={post.id}
                        post={post}
                        onDelete={this.handleDelete}
                        onUpdate={this.handleUpdate}
                        onCommentUpdate={this.handleCommentUpdate}
                        />
                ))}
                </div>
            </div>
        );
    }

}

export default PostsList;