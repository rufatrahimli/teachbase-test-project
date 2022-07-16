import React from 'react';
import Card from '../../UI/Card/Card';
import styles from './UserPage.module.css';

const Home = (props) => {
  return (
    <Card className={styles.home}>
      <h1>Добро пожаловать!</h1>
    </Card>
  );
};

export default Home;
