import React from 'react'
import styles from './Home.module.css'
import image from '../../assets/Image.svg'
import LoginForm from '../LoginForm/LoginForm'
const MainPage = (props) => {
    const {setIsLoggedIn} = props
    return (
        <article className={styles.main__container}>
            <div className={styles.main__container__box}>
                <div className={styles.form__container}>
                <LoginForm setIsLoggedIn={setIsLoggedIn}/>
                </div>
            </div>
            <div className={styles.image__box}>
                <img src={image} alt={'Home'}/>
            </div>
        </article>
    )
}

export default MainPage
