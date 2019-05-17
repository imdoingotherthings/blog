import React from 'react';

class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <label>Email</label>
                <input type="text"/>
                <br></br>
                <br></br>
                
                {/* */}

                <label>Password</label>
                <input type="text"/>
                <br></br>
                <br></br>

                {/* */}

                <button>Submit</button>
            </div>
        );  
    }
}

export default Signin;