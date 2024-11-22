import React from "react";
import { Link } from "react-router-dom";
import './header.css'

function Header() {
    return(
        <>
        <div className="header">
            <div className="logo">
                <Link to={'/main'}><img className="logotype" src={process.env.PUBLIC_URL + '/pic/logo.png'} /></Link>
            </div>
            <div className="shelf">
                <Link to={'/main'}> <div className="link">Main</div></Link>
                <Link to={'/oil'}> <div className="link">About Oil</div></Link>
                <Link to={'/contact'}> <div className="link">Contact</div></Link>
            </div>
            <div className="link_save">
                <Link to={'/shop'}><div className="link">Help Planet</div></Link>
            </div>
        </div>
        
        </>
    )
}

export default Header