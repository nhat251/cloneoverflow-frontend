import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy, { TippyProps } from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper/';
import MenuItem from './MenuItem';
import { ReactNode } from 'react';
import { IMenuItem } from '~/types/Menu';

interface MenuProps {
  items: IMenuItem[];
  children: ReactNode;
}

const cx = classNames.bind(styles);

function Menu({ items = [], children }: MenuProps) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  const renderResult: TippyProps['render'] = (attrs) => (
    <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
      <PopperWrapper className={cx('menu-popper')}>
        <div className={cx('menu-body')}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );

  return (
    <Tippy interactive offset={[0, 0]} placement="bottom-start" render={renderResult}>
      <span>{children}</span>
    </Tippy>
  );
}

export default Menu;
