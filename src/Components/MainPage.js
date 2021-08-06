import react from 'react';
import { withRouter } from 'react-router';
import { useEffect } from 'react';
import AlertComponent  from '../Components/Alert Component/AlertComponent';
import { useState } from 'react';

const MainPage = (props) => {
    let [mainPageDisplay, setMainPageDisplay] = useState({ 'display': 'block' });
let [alertProps, setAlertProps] = useState({
    shouldDisplay: false,
    content: {
    
      modalTitle: "",
      modalBody: "",
      modalButton:""
    }
    });


    useEffect(() => {
        props.setHeaderTitle("main");
        let loginStatus = localStorage.getItem("loginSuccess");
        let regStatus = localStorage.getItem("regSuccess");
        console.log("login status in main", loginStatus);
        
          if(loginStatus==='false' &&  regStatus==='false' )
            props.history.push('/login');
        
        if (loginStatus === 'false' && regStatus === 'true')
        {
            console.log("entered main alert if block");
            setAlertProps({
                shouldDisplay: true,
                content: {
                    modalTitle: "Registration Success",
                    modalBody: "Check your registered email for starter kit!",
                    modalButton: "Okay!"
                }
            });
        }
    
    
    }, []);
    return (
        <div style={mainPageDisplay}>
        <h1>Welcome To Main Page of this App!!</h1>
            <AlertComponent shouldDisplay={alertProps.shouldDisplay}
                setAlertProps={setAlertProps}
                modalContent={Object.assign({}, alertProps.content)}
                setFormDisplay={setMainPageDisplay}>
            </AlertComponent>
        </div>
    )
}

export default withRouter(MainPage);