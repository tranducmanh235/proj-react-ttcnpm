import React, { Component } from 'react';

class Forgotpass extends Component {
    render() {
        return (
            <div className="content">
                <form className="container" name="signin"> 
                    <div className="form-group border-bottom">
                        <h2 className="text-center">Forgot Password</h2>    
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Enter your email address:</label>
                        <input type="email" className="form-control" id="email" placeholder="a@gmail.com" required />
                    </div>
                    <br />
                                    
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </div>
                    
                   
                </form>
            </div>
        );
    }
}

export default Forgotpass;