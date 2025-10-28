import type { ReactNode } from "react";
import Header from "../components/Header/Header";
import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
interface DefaultLayoutProps {
    children: ReactNode
}
function DefaultLayout({ children } : DefaultLayoutProps) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
