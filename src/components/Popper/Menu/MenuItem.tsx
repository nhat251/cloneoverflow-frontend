import classNames from 'classnames/bind';
import Button from "~/components/commons/Button";
import styles from './Menu.module.scss';
import { IMenuItem } from '~/types/Menu';

interface MenuItemProps {
  data: IMenuItem;
}

const cx = classNames.bind(styles);
function MenuItem({ data }: MenuItemProps) {
    const classes = cx('menu-item', {
        separate: data.separate,
        indend: data.indent
    });
    return (
        <Button leftIcon={data.icon} to={data.to} className={classes}>
            {data.title}
        </Button>
    );
}

export default MenuItem;