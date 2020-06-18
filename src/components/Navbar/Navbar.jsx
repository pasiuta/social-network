import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

/*let c1 = "item";
let c2 = "active";
//"item active"
let s = c1 + " " + c2;
let classesNew = `${classes.item} ${classes.active}`;*/
const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink  to="/Profile" activeClassName={classes.activeLink}>Profile</NavLink>

        </div>
        <div className={`${classes.item} ${classes.activeLink}`}>
            <NavLink  to="/dialogs"activeClassName={classes.activeLink}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <a>News</a>
        </div>
        <div className={classes.item}>
            <a>Music</a>
        </div>
        <div className={classes.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;