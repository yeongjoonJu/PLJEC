import React from 'react';
import Login from 'components/Login';
import styles from './style/Home.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Home = () => (
    <div className={cx('home')}>
        <header>
            <img/>
            <div>PLJEC</div>
            <button>Sign up</button>
        </header>
        <Login/>
    </div>
)

export default Home;