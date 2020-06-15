import React, { useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import { overlay, navbar } from '../common/styleobjects';
import Menu from './menu';
import Weather from './weather';
import { getToken } from '../common/auth/sessions';

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
    const [shake, setShake] = useState(0);
    const now = Date();
    var pvmForm = { weekday: 'short', month: 'numeric', day: 'numeric' };

    const toggleMenu = () => {
        let px = "";
        if (showMenu) px = "0";
        else if (!showMenu && getToken()) px = "190px";
        else px = "155px"
        document.getElementById("dropMenu").style.height = px;
        setShowMenu(!showMenu);
        setShake(1);
    }
   
    return (
        <div className="navbar navbar-expand-sm" style={navbar} onClick={toggleMenu}>
            <p className="MenuText" >
                Menu
                <Icon.Justify size={30} className="ml-3 burgerShake fa-5x" onAnimationEnd={() => setShake(0)} shake={shake} />
            </p>
            <div id="dropMenu" style={overlay} onClick={toggleMenu}>
               {showMenu ?  <Menu onClick={toggleMenu} /> : <></>} 
            </div>
            <div className="float-right ml-auto text-right" style={{ color: 'white', fontSize:"10px" }}>
                    {(new Date(now)).toLocaleDateString('fi-FI', pvmForm)} &nbsp;
                    <Weather location="Helsinki"/>
            </div>
        </div>
    )
}
// (kokeile position:'absolute' 
// ja linki ehdollisesti renderöityinä (ks kokousfron 0.1/2 ,jos tallessa))