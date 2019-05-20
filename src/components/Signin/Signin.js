import React from 'react';

class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value });
    }

    onChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    onSubmitAdminLog = () => {
        fetch('http://localhost3001/admin-log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then(res => {
            console.log(res.json());
        }).catch(err => {
            console.log(`Error - ${err}`);
        })
    }

    render() {
        return (
            <div>
                <label>Name</label>
                <input onChange={this.onChangeName} type="text"/>
                <br></br>
                <br></br>

                <label>Email</label>
                <input onChange={this.onChangeEmail} type="text"/>
                <br></br>
                <br></br>
                
                {/* */}

                <label>Password</label>
                <input onChange={this.onChangePassword} type="text"/>
                <br></br>
                <br></br>

                {/* */}

                <button onClick={this.onSubmitAdminLog}>Submit</button>
            </div>
        );  
    }
}

export default Signin;