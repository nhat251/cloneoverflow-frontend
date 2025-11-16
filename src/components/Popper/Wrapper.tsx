import {ReactNode} from 'react';
import styles from './Wrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
interface WrapperPopperProps{
    children: ReactNode,
    className?: string
}
function Wrapper({ children, className }: WrapperPopperProps) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wrapper;
