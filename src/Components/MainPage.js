import react from 'react';
import { withRouter } from 'react-router';
import { useEffect } from 'react';

const MainPage =(props)=>{
    useEffect(() => {
        props.setHeaderTitle("main");
        let loginStatus = localStorage.getItem("loginSuccess");
        console.log("login status in main", loginStatus);
        
          if(loginStatus==='false')
            props.history.push('/login');
    
    
    }, []);
    return (
        <h1>Welcome To Main Page of this App!!</h1>
    )
}

export default withRouter(MainPage);