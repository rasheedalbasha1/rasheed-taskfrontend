import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import {Link,NavLink} from "react-router-dom";


const Nav = () =>{

    let location = useLocation();

    return (

        <div className="container-fluid no-padding-margin">
           <nav className="subnav">
               <NavLink to="/" >Repositories</NavLink>
               <NavLink to="developers" >developers</NavLink>
           </nav>

            <nav className="header-toggle">

                {location.pathname === '/' || location.pathname === 'Trending'
                    ?
                    <div className="sub-details">
                        <a> Spoken Language:
                            <span> Any <FaCaretDown /></span>
                        </a>
                    </div>
                    :
                    null

                }

                <div className="sub-details">
                    <a>
                        Language:
                        <span> Any <FaCaretDown /></span>
                    </a>
                </div>

                <div className="sub-details">
                    <a>
                        Date range:
                        <span> Any <FaCaretDown /></span>
                    </a>
                </div>
            </nav>

        </div>
    )
};
export default Nav;


