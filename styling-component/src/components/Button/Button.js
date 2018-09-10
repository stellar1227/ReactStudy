import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

//...rest 나중에 이 컴포넌트가 받을 모든 props 
const Button = ({children, ...rest}) =>{

    return (
        <div className={cx('button')} {...rest}>
            {children}
        </div>
    )

}

export default Button;