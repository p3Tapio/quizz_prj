import React, { useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import { overlay, navbar } from '../Common/StyleObjects';
import Menu from './Menu';
import Weather from './Weather';
import { getToken } from '../Common/Auth/Sessions';

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
                <Menu onClick={toggleMenu} />
            </div>
            <div className="float-right ml-auto text-right" style={{ color: 'white', fontSize:"10px" }}>
                    {(new Date(now)).toLocaleDateString('fi-FI', pvmForm)} &nbsp;
                    <Weather location="Helsinki"/>
            </div>
        </div>
    )
}
