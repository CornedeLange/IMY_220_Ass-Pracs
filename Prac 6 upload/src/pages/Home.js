import React from "react";
import {Link} from "react-router-dom";

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            users: [],
            errror: null
        }
        this.fetchUsers = this.fetchUsers.bind(this);
    }

    componentDidMount(){
        this.fetchUsers();
    }

    fetchUsers = async () => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

            const data = await response.json();
            this.setState({users: data});
        }catch(error){
            console.error(error.message);
            this.setState({error : error});
        }
    }

    render(){
        const {users, error } = this.state;
        return(
            <div>
                {!error && users && users.map((user, index) => (
                    <div key={index}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.id}</p>
                        <button type="button"><Link to={`/posts/${user.id}`}>Users Posts</Link></button>
                    </div>
                ) )}
            </div>
        );
    }
}

export default Home;