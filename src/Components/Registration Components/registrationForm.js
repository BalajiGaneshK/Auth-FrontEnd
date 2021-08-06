import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import validateRegForm from './ValidateRegForm';
import AlertComponent from '../Alert Component/AlertComponent';
import Loading from '../Loading Components/Loading';
import '../../registrationForm.css';

function RegistrationForm(props) {
    const [regForm, storeRegForm] = useState({ name: "", email: "", city: "", password: "" });
    let [validations, setValidations] = useState({});
    let [regFormDisplay, setRegFormDisplay] = useState({ 'display': 'block' });
    let [loadingShouldDisplay, setLoadingDisplay] = useState(false);
    const [alertProps, setAlertProps] = useState({
    shouldDisplay: false,
    content: {
    
      modalTitle: "",
      modalBody: "",
      modalButton:""
    }
    });

    
    useEffect(() => { props.setHeaderTitle("Register"); localStorage.setItem("regSuccess", false); localStorage.setItem("loginSuccess", false);},[])
    const handleChange = (e) => {
    
        const { id, value } = e.target
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
                localStorage.setItem("regSuccess", true);
                props.history.push('./main');
            }
                
                   
            else if (resp.status === 409) {
                /*console.log(resp.error);*/
                console.log("i am here");
                window.alert("User already registered.Enter unique details");
            }
        }
    }

    const handleSubmit = async (e)=> {
    e.preventDefault();

    let validationsObj = validateRegForm(regForm);
        console.log("RegValidationsObj", validationsObj);
        
        if (validationsObj.validName !== "" &&
            validationsObj.validCity!=="" &&
            validationsObj.validEmail !== "" &&
            validationsObj.validConfirmPassword !== "")
      validationsObj.allInputValid = true;
    
    else
      validationsObj.allInputValid = false
    
    
    console.log("allInputValid", validationsObj.allInputValid);
    setValidations(validationsObj);
   
    if (validationsObj.allInputValid) {
      
      setRegFormDisplay({ 'display': 'none' });
      setLoadingDisplay(true);
      try {
        //sendDetailsToServer();
          let payload = {
              name: regForm.name,
              email:regForm.email,
              city: regForm.city,
              password: regForm.password
          };
           let resp = await axios.post("https://nodemailerauth.herokuapp.com/register", payload);
          localStorage.setItem("regSuccess", true);
           props.history.push('./main');
      }
      
      
            
      catch (err) {
        //setLoadingDisplay(false);
        localStorage.setItem("regSuccess", false);
        setAlertProps({
          shouldDisplay: true,
          content: {
            modalTitle: "Registration Failed",
            modalBody: "User Already exists",
            modalButton:"Enter Again!"
          }
        });

        setLoadingDisplay(false);
        console.log("response failed:", err);
        console.log("catch inside handleSubmit, alertProps=", alertProps);
      }
      
    }


        /*if (regForm.password === regForm.confirmPassword)
        {
            console.log("inside handleSubmit");
            sendDetailsToServer();
        }
        
        else
            console.error("Passwords do not match.Enter again!");*/
    }

    return (
         <Router>
        <div className="card col-12 col-lg-4 login-card registrationForm hv-center" style={regFormDisplay}>
            <form>
                <div className="form-group text-left">
                <label htmlFor="name">Name</label><sup style={{"color":"red"}}>*</sup>
                <input type="text" 
                       className="form-control" 
                       id="name" 
                       aria-describedby="name" 
                        placeholder="Enter Name"
                        value= {regForm.name}
                        onChange={handleChange}
                        />
                
                 {validations.invalidName!=="" && <p style={{ color: "red" }}>{validations.invalidName}</p>}
                 {validations.validName!=="" && <p style={{color:"green"}}>{validations.validName}</p>}
                </div>
                
                 <div className="form-group text-left">
                <label htmlFor="city">City</label> <sup style={{"color":"red"}}>*</sup>
                <input type="text" 
                       className="form-control" 
                       id="city" 
                       aria-describedby="city" 
                        placeholder="Enter City"
                        value= {regForm.city}
                        onChange={handleChange}
                        />
                 {validations.invalidCity!=="" && <p style={{ color: "red" }}>{validations.invalidCity}</p>}
                 {validations.validCity!=="" && <p style={{color:"green"}}>{validations.validCity}</p>}
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label><sup style={{"color":"red"}}>*</sup>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        value= {regForm.mail}
                        onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                 {validations.invalidEmail!=="" && <p style={{ color: "red" }}>{validations.invalidEmail}</p>}
                 {validations.validEmail!=="" && <p style={{color:"green"}}>{validations.validEmail}</p>}
                </div>
                 
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label><sup style={{"color":"red"}}>*</sup>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={regForm.password}
                        onChange={handleChange}
                    />
                    {validations.invalidPassword!=="" && <p style={{ color: "red" }}>{validations.invalidPassword}</p>}
                    {validations.validPassword!=="" && <p style={{ color: "green" }}>{validations.validPassword}</p>}
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label><sup style={{"color":"red"}}>*</sup>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        />
                    {validations.invalidConfirmPassword!=="" && <p style={{ color: "red" }}>{validations.invalidConfirmPassword}</p>}
                    {validations.validConfirmPassword!=="" && <p style={{ color: "green" }}>{validations.validConfirmPassword}</p>}
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
            <Loading shouldDisplay={loadingShouldDisplay} ></Loading>
            <AlertComponent shouldDisplay={alertProps.shouldDisplay} setAlertProps={setAlertProps} modalContent={Object.assign({}, alertProps.content)} setFormDisplay={setRegFormDisplay}></AlertComponent>
            
        </Router>

    )

}

export default withRouter(RegistrationForm);