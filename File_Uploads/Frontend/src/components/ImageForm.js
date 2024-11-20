import React from "react";

export class ImageForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            file: null
        };

        this.imageRef = React.createRef();
        this.uploadImage = this.uploadImage.bind(this);
    }

    uploadImage = async (event) => {
        event.preventDefault();

        const file = this.imageRef.current.files[0];

        //FORM DATA
        const formData = new FormData();
        formData.append("image", file);
        const response = await fetch("/upload", {
            method: "POST",
            headers: {
                contentType: "multipart/form-data",
            },
            body: formData,
        });
        const body = await response.json();
        console.log(body);
    };

    render(){
        return(
            <form onSubmit={this.uploadImage} >
                <h2>
                    Whats your favorite colour?
                </h2>
                <div>
                    <img src={this.state.file || ""} alt="preview"/>
                </div>
                <label>
                    Upload a picture
                    <input type="file" name="file" ref={this.imageRef} required></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
}