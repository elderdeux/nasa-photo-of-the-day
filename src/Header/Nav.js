import React from "react";
import "./Nav.css";
import {Link, NavBar, Date} from "../Style.js";


const Nav = (props) => {
    var date = props.date;
    return (
      <NavBar>
        <Date>{date}</Date>
        <div>
            <Link href="https://github.com/elderdeux/nasa-photo-of-the-day">View Code</Link>
        </div>
      </NavBar>  
    )
}

export default Nav;