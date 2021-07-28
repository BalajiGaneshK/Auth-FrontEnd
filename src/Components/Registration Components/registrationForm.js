import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import  LoginForm  from '../Login Components/LoginForm';
import '../../registrationForm.css';

function RegistrationForm(props) {
    const [regForm, storeRegForm] = useState({ name: "", email: "", city: "", password: "" });
    useEffect(() => { props.setHeaderTitle("Register"); localStorage.setItem("loginSuccess", false); },[])
    const handleChange = (e) => {
    
        const {id , value} = e.target   
         storeRegForm(prevState => ({
            ...prevState,
            [id]: value
        }));

        console.log("updated reg form:",regForm)
    }

    const sendDetailsToServer = async () => {
        if (regForm.email.length && regForm.password.length && regForm.name.length && regForm.city.length)
        {
        
            const payload = {
                name: regForm.name,
                city:regForm.city,
                email: regForm.email,
                password: regForm.password
                
            }
            console.log("inside sendDetailsToServer()");
            let resp = await axios.post("https://nodemailerauth.herokuapp.com/register", payload);
            console.log("before if else");
            if (resp.status === 200) {
                console.log("Registration successful");
                props.history.push('./main');
            }
                
                   
            else if (resp.status === 409) {
                /*console.log(resp.error);*/
                console.log("i am here");
                window.alert("User already registered.Enter unique details");
            }
        }
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if (regForm.password === regForm.confirmPassword)
        {
            console.log("inside handleSubmit");
            sendDetailsToServer();
        }
        
        else
            console.error("Passwords do not match.Enter again!");
    }

    return (
         <Router>
        <div className="card col-12 col-lg-4 login-card registrationForm hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="name">Name</label>
                <input type="text" 
                       className="form-control" 
                       id="name" 
                       aria-describedby="name" 
                        placeholder="Enter Name"
                        value= {regForm.name}
                        onChange={handleChange}
                />
                </div>

                 <div className="form-group text-left">
                <label htmlFor="city">City</label>
                <input type="text" 
                       className="form-control" 
                       id="city" 
                       aria-describedby="city" 
                        placeholder="Enter City"
                        value= {regForm.city}
                        onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        value= {regForm.mail}
                        onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={regForm.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        onChange={handleChange}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick= {handleSubmit}
                >
                    Register
                

                </button>
                <br></br>
                <br></br>
                
            </form>
                <span className="LoginlinkText" onClick={() => { props.setHeaderTitle('Login ');props.history.push('/login')}}>Already registered? click here to login!</span>
              
            
           
        </div>
        </Router>

    )

}

export default withRouter(RegistrationForm);