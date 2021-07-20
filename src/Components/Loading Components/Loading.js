import './Loading.css';
import { useState } from 'react';
import { useEffect } from 'react';
const Loading = (props) => {
    let [loaderDisplay, setLoaderDisplay] = useState('none');
    
    useEffect(() => {
        if (props.shouldDisplay)
            setLoaderDisplay('block');
        else
            setLoaderDisplay('none');
            
    }, [props.shouldDisplay])

    
    
    return (
        <div style={{ display: loaderDisplay }}>
            
            <div className="loader"></div>
            <div className="loading">
                 <b>Loading...</b>
            </div>
            
            
        </div>
    )
}

export default Loading;