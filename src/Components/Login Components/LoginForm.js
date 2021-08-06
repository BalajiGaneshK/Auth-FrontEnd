import react from 'react';
import '../../LoginForm.css';
import { withRouter } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import AlertComponent from '../Alert Component/AlertComponent';
import axios from 'axios';
import validateLoginForm from './ValidateLoginForm';
import Loading from '../Loading Components/Loading';

const LoginForm = (props) => {
  const [loginForm, storeLoginForm] = useState({ email: '', password: '' });
  let [validations, setValidations] = useState({});
  let allInputValid = false;
  const [alertProps, setAlertProps] = useState({
    shouldDisplay: false,
    content: {
    
      modalTitle: "",
      modalBody: "",
      modalButton:""
    }
  });
  let [loadingShouldDisplay, setLoadingDisplay] = useState(false);
  let [loginFormDisplay, setLoginFormDisplay] = useState({'display':'block'});
  

  useEffect(() => {
    console.log("Loginform.js- useEffect for \"Login\"header title"); props.setHeaderTitle('Login');
    localStorage.setItem("loginSuccess", false);
    localStorage.setItem("regSuccess", false);
  }, []);
  useEffect(() => { console.log("Alert Props", alertProps) }, [alertProps]);

  const updateLoginForm = (e) => {
    const { id, value } = e.target;
    storeLoginForm({
      ...loginForm,
      [id]: value
    });
    console.log("Login form:", loginForm);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationsObj = validateLoginForm(loginForm);
    console.log("ValidationsObj", validationsObj);
    if (validationsObj.validEmail !== "" && validationsObj.validPassword !== "")
      validationsObj.allInputValid = true;
    
    else
      validationsObj.allInputValid = false
    
    
    console.log("allInputValid", validationsObj.allInputValid);
    setValidations(validationsObj);
   
    if (validationsObj.allInputValid) {
      
      setLoginFormDisplay({ 'display': 'none' });
      setLoadingDisplay(true);
      try {
        let resp = await axios.post('https://nodemailerauth.herokuapp.com/login', loginForm);
        localStorage.setItem("loginSuccess", true);
        localStorage.setItem("loggedInUserName",resp.data.userData.name);
        props.history.push('./main');
      }
          
      catch (err) {
        //setLoadingDisplay(false);
        localStorage.setItem("loginSuccess", false);
        setAlertProps({
          shouldDisplay: true,
          content: {
            modalTitle: "Login Failed",
            modalBody: "Either UserName or Password is wrong",
            modalButton:"Enter Again!"
          }
        });

        setLoadingDisplay(false);
        console.log("response failed:", err);
        console.log("catch inside handleSubmit, alertProps=", alertProps);
      }
    }
  }

  
  return (
    <div >
      <div className="card login-card text-left hv-center loginForm " style={loginFormDisplay}>
        <div className="card-body">
        <form class="needs-validation"  noValidate>

  <div className="form-group">
    <label for="email">Email address</label><sup style={{"color":"red"}}>*</sup>
          <input type="email" className="form-control emailBox" placeholder="Enter email" id="email" onChange={updateLoginForm} required />
                {validations.invalidEmail!=="" && <p style={{ color: "red" }}>{validations.invalidEmail}</p>}
                 {validations.validEmail!=="" && <p style={{color:"green"}}>{validations.validEmail}</p>}
  </div>
            
  <div className="form-group">
    <label for="password">Password</label><sup style={{"color":"red"}}>*</sup>
    <input type="password" className="form-control passwordBox" placeholder="Enter password" id="password" onChange={updateLoginForm }/>
                {validations.invalidPassword!=="" && <p style={{ color: "red" }}>{validations.invalidPassword}</p>}
                {validations.validPassword!=="" && <p style={{ color: "green" }}>{validations.validPassword}</p>}
  </div>
  
  <button type="submit" className="btn btn-primary submitButton" onClick={handleSubmit}>Submit</button>
  
          </form>
          </div>
        <span className="ReglinkText" onClick={() => { props.setHeaderTitle('Register'); props.history.push('/');}}>Not Registered? Click here to Register!</span>
        </div>
    <Loading shouldDisplay={loadingShouldDisplay} ></Loading>
    <AlertComponent shouldDisplay={alertProps.shouldDisplay} setAlertProps={setAlertProps} modalContent={Object.assign({},alertProps.content)} setFormDisplay= {setLoginFormDisplay}></AlertComponent>
     
      </div>
)

}

export default withRouter(LoginForm);