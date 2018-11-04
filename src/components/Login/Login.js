import React, { Component } from 'react';
import styles from './Login.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Login extends Component {

    render() {
        return (
            <div className ={cx('login')}>
                <div className={cx('title')}> Login </div>
                <input placeholder='your ID' />
                <input placeholder='your password'/>
                <button onClick={this.handleSubmit}>sign in</button>
            </div>
        );
    };
}

export default Login;