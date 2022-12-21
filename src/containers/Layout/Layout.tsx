import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from '@assets/images/logo.svg';

import { logoutResolver } from '@data/actions/core/resolvers';

import S from './Layout.scss';

import type { FC } from 'react';
import type { State } from '@data/types';
import type { LayoutProps } from './types';

const mapStateToProps = (state: State) => ({
  token: state.core.token,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutResolver()),
});

const Layout: FC<LayoutProps> = ({
  children,
  token,
  logout
}) => {
  return (
    <div className={S.root}>
      {token && (<>
        <div className={S.header}>
          <Logo className={S.logo} />
          <div
            className={S.logoutButton}
            onClick={logout}
          >
            Выйти
          </div>
        </div>
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
              <Menu.Item key="frige">
                <Link to="/">Мой холодильник</Link>
              </Menu.Item>
              <Menu.Item key="foodList">
                <Link to="/food-list">Cписок покупок</Link>
              </Menu.Item>
            </Menu>
          </div>
          {children}
        </div>
      </>)}
      {(!token && 
        <> 
          {children} 
        </>)}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
