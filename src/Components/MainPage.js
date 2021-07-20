import react from 'react';
import { useEffect } from 'react';

const MainPage =(props)=>{
    useEffect(()=>props.setHeaderTitle("main"), []);
    return (
        <h1>Welcome To Main Page of this App!!</h1>
    )
}

export default MainPage;