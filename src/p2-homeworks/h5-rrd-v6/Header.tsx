import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            {/*<NavLink className={styles.link} to={PATH.PRE_JUNIOR}>Pre-Junior </NavLink>*/}
            <NavLink className={({isActive}) => (isActive ? styles.active : styles.link)} to={PATH.PRE_JUNIOR}>Pre-Junior </NavLink>
            <NavLink className={({isActive}) => (isActive ? styles.active : styles.link)} to={PATH.JUNIOR}>Junior </NavLink>
            <NavLink className={({isActive}) => (isActive ? styles.active : styles.link)} to={PATH.JUNIOR_PLUS}>Junior+ </NavLink>

        </div>
    )
}

export default Header
