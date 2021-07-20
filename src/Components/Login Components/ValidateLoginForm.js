const validateLoginForm = (details) => {
    console.log("inside validateLoginForm");
    let errors = {invalidEmail:"",invalidPassword:"", validEmail:"", validPassword:""};
    if (details.email.trim().length === 0)
        errors.invalidEmail = "Email Id is required";

    else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(details.email.trim()))
        errors.invalidEmail="Enter Email Id in correct format";

    else
       errors.validEmail= "Cool!"
    if (details.password.trim().length === 0)
        errors.invalidPassword = "Password is required";
    
    else
        errors.validPassword = "Cool!";
    
    return errors;
}

export default validateLoginForm;