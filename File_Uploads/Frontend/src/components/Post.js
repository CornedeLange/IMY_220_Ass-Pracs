import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      updatedName: props.post.name,
      updatedContent: props.post.content,
      updatedAuthorName: props.post.author.name,
      updatedAuthorEmail: props.post.author.email,
      isEditingCommentIndex: null,
      updatedComment: '',
    };
  }

  toggleEdit = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = () => {
    const { post, onUpdate } = this.props;
    const { updatedName, updatedContent, updatedAuthorName, updatedAuthorEmail } = this.state;

    const { _id, ...postWithoutId } = post; // Destructure to remove _id

    const updatedPost = {
        ...postWithoutId, // Spread the rest of the properties
        name: updatedName,
        content: updatedContent,
        author: {
            name: updatedAuthorName,
            email: updatedAuthorEmail,
            user_id: post.author.user_id 
        },
    };
    onUpdate(post.id, updatedPost); // Call the update function from parent
    this.toggleEdit(); // Exit edit mode
  };

  handleCommentEdit = (index) => {
    this.setState({ isEditingCommentIndex: index, updatedComment: this.props.post.comments[index].comment });
  };

  handleCommentUpdate = (index) => {
    const { post, onCommentUpdate } = this.props; // Use the onCommentUpdate prop
    const updatedComments = post.comments.map((comment, i) =>
        i === index ? { ...comment, comment: this.state.updatedComment } : comment
    );

    // Call the parent's comment update handler
    onCommentUpdate(post.id, updatedComments);

    this.setState({ isEditingCommentIndex: null, updatedComment: '' }); // Exit comment edit mode
} ;

render() {
    const { post, onDelete } = this.props;
    const { isEditing, updatedName, updatedContent, updatedAuthorName, updatedAuthorEmail, isEditingCommentIndex, updatedComment } = this.state;

    return (
        <div>
            <div>
                <h2>{post.name}</h2>
                <p>{post.content}</p>
                <p>Author: {post.author.name} ({post.author.email})</p>
                <h3>Comments:</h3>
                <ul>
                    {post.comments.map((comment, index) => (
                        <li key={index}>
                            {isEditingCommentIndex === index ? (
                                <div>
                                    <input
                                        type="text"
                                        value={updatedComment}
                                        onChange={this.handleInputChange}
                                        name="updatedComment"
                                        placeholder="Edit comment"
                                    />
                                    <button onClick={() => this.handleCommentUpdate(index)}>Save</button>
                                    <button onClick={() => this.setState({ isEditingCommentIndex: null })}>Cancel</button>
                                </div>
                            ) : (
                                <div>
                                    <strong>{comment.name}:</strong> {comment.comment}
                                    <button onClick={() => this.handleCommentEdit(index)}>Edit</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <button onClick={() => onDelete(post.id)}>Delete</button>
            </div>

            {isEditing && (
                <div>
                    <h3>Edit Post:</h3>
                    <label>Name:</label>
                    <input type="text" name="updatedName" value={updatedName} onChange={this.handleInputChange} placeholder="Post Title" />
                    <br />
                    <label>Content:</label>
                    <textarea name="updatedContent" value={updatedContent} onChange={this.handleInputChange} placeholder="Post Content" />
                    <br />
                    <label>Author:</label>
                    <input type="text" name="updatedAuthorName" value={updatedAuthorName} onChange={this.handleInputChange} placeholder="Author Name" />
                    <br />
                    <label>Email:</label>
                    <input type="email" name="updatedAuthorEmail" value={updatedAuthorEmail} onChange={this.handleInputChange} placeholder="Author Email" />
                    <br />
                    <button onClick={this.handleUpdate}>Save</button>
                    <button onClick={this.toggleEdit}>Cancel</button>
                </div>
            )}

            {!isEditing && <button onClick={this.toggleEdit}>Edit</button>}
        </div>
    );
}
}

export default Post;