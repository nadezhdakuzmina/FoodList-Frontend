import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import S from './Layout.scss';

import type { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <div className={S.root}>
      <div className={S.header}>Logo</div>
      <div className={S.content}>
        <div className={S.menu}>
          <Menu
            style={{
              width: '100%',
              height: '100%',
            }}
            defaultSelectedKeys={['main']}
            mode="vertical"
          >
            <Menu.Item key="main">
              <Link to="/">Main</Link>
            </Menu.Item>
            <Menu.Item key="frige">
              <Link to="/frige">Frige</Link>
            </Menu.Item>
            <Menu.Item key="foodList">
              <Link to="/foodList">FoodList</Link>
            </Menu.Item>
          </Menu>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
