import React from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './Header.module.css'
const Header = (props) => {
    const{isLoggedIn, onLogout} = props;
    return (
        <div className={styles.header}>
            <Navigation isLoggedIn={isLoggedIn} onLogout={onLogout}/>
        </div>
    )
}

export default Header
