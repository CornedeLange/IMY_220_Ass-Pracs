import React from "react";

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      description: props.description,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    this.props.onUpdate(title, description);
  };

  render() {
    const { title, description } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Post Title</label><br />
        <input type="text" name="title" value={title} onChange={this.handleChange} /><br />
        <label>Post Description</label> <br />
        <input type="text" name="description" value={description} onChange={this.handleChange}/><br />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default EditPost; 
