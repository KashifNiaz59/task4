import React from 'react';
import { MdViewHeadline } from "react-icons/md";
import {NavLink} from 'react-router-dom';

import '../stylesheets/Navbar.css';

const Navbar=()=>{

    function openDiv(){
        document.getElementById("secondDiv").style.display="flex";
    }
    function closeDiv(){
        document.getElementById("secondDiv").style.display="none";
    }

    function displayUser(){
        document.getElementById("thirdDiv").style.display="flex";
    }

    function hideUser(){
        document.getElementById("thirdDiv").style.display="none";
        document.getElementById("thirdDiv").style.transitionDuration="4s";
    }
    return(
        <React.Fragment>

            <div className="_main">

                <div className="_firstDiv">

                    <a href="#" className="_header me-auto">
                        <MdViewHeadline className="_toggle" onClick={openDiv}/>
                        <img src="../images/image_0.jpg" alt="" width="30" height="30"/>
                        newsly
                    </a>

                    <input className="_search mx-auto" type="search" name="" id="" placeholder="Search"/>

                    <a href="" className="_user ms-auto" onMouseEnter={displayUser} onMouseLeave={hideUser}>
                        <img src="../images/image_0.jpg" alt="" width="30" height="30"/>
                    </a>

                </div>

                {/* 2nd Div */}
                <div className="_secondDiv" id="secondDiv">

                    <a href="#" className="_header">
                        <MdViewHeadline className="_toggle" onClick={closeDiv}/>
                        <img src="../images/image_0.jpg" alt="" width="30" height="30"/>
                        <NavLink exact activeClassName="active-class" to="/">newsly</NavLink>
                    </a>

                    <hr/>
                    <div className="_scrollable">
                        <NavLink exact activeClassName="active-class" className="_navlink" to="/foryou">for you</NavLink>
                        <NavLink exact activeClassName="active-class" className="_navlink" to="/pakistan">Pakistan</NavLink>
                        <NavLink exact activeClassName="active-class" className="_navlink" to="/world">world</NavLink>
                        <NavLink exact activeClassName="active-class" className="_navlink" to="/urdunews">urdu news</NavLink>
                        <NavLink exact activeClassName="active-class" className="_navlink" to="/business">business</NavLink>
                        <NavLink exact activeClassName="active-class" className="_navlink" to="/technology">technology</NavLink>
                        <NavLink exact activeClassName="active-class" className="_navlink" to="/sports">sports</NavLink>
                        <NavLink exact activeClassName="active-class" className="_navlink" to="/sciences">sciences</NavLink>
                        <NavLink exact activeClassName="active-class" className="_navlink" to="/health">health</NavLink>
                        <NavLink exact activeClassName="active-class" className="_navlink" to="/entertainment">entertainment</NavLink>
                        <NavLink exact activeClassName="active-class" className="_navlink" to="/travel">travel</NavLink>
                        <NavLink exact activeClassName="active-class" className="_navlink" to="/food">food</NavLink>
                    </div>
                </div>

                <div className="_thirdDiv" id="thirdDiv">

                    <NavLink exact activeClassName="active-class" to="/">setting</NavLink>
                    <NavLink exact activeClassName="active-class" to="/">setting</NavLink>
                    <NavLink exact activeClassName="active-class" to="/">setting</NavLink>
                    <NavLink exact activeClassName="active-class" to="/">setting</NavLink>
                    <NavLink exact activeClassName="active-class" to="/">setting</NavLink>
                    <NavLink exact activeClassName="active-class" to="/">setting</NavLink>
                    <NavLink exact activeClassName="active-class" to="/">setting</NavLink>
                    <NavLink exact activeClassName="active-class" to="/">setting</NavLink>
                    <NavLink exact activeClassName="active-class" to="/">setting</NavLink>

                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;