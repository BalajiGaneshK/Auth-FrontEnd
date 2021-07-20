import React from 'react';
function Header(props) {
    if(props.title!=="main")
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
                <span className="h3">{ props.title}</span>
            </div>
        </nav>
        )
    
    return (
        <div></div>
    )
}
export default Header;