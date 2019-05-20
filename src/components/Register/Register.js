import React from 'react';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
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

    onSubmitAdminLog = (data) => {
        fetch('http://localhost:3001/admin-register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                name: this.state.name
            })
        }).then(response => {
            response.json();
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
                <input onChange={this.onChangePassword} type="password"/>
                <br></br>
                <br></br>

                {/* */}

                <button onClick={this.onSubmitAdminLog}>Submit</button>
            </div>
        );
    }

}

export default Register;