const validateRegForm = (details) => {
    console.log("inside validateRegForm");
    let errors = {
        validName:"",
        invalidName: "",
        validCity: "",
        invalidCity:"",
        invalidEmail: "",
        invalidPassword: "",
        validEmail: "",
        validPassword: "",
        validConfirmPassword: "",
        invalidConfirmPassword: ""
    };
    
    if (details.name.trim().length === 0)
    {
        errors.invalidName= "Please enter your name!"
    }

    else
        errors.validName = "Perfect!"
    
     if (details.city.trim().length === 0)
    {
        errors.invalidCity= "Please enter your City!"
    }

    else
        errors.validCity= "Perfect!"
    
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
    
    if (details.confirmPassword !== details.password)
        errors.invalidConfirmPassword = "Passwords don't Match";
    
    else
        errors.validConfirmPassword = "Perfect!";
    
    
    
    return errors;
}

export default validateRegForm;