import { connect } from 'react-redux';
import { Routes, Route } from 'react-router';

import Frige from '@pages/Frige';
import Registration from '@pages/Registration';
import Login from '@pages/Login';

import type { FC } from 'react';
import type { RoutingProps } from './types';
import type { State } from '@data/types';

const mapStateToProps = (state: State) => ({
  token: state.core.token,
});

const Routing: FC<RoutingProps> = ({ token }) => {
  if (token) {
    return (
      <Routes>
        <Route path="/" element={<Frige />} />
        <Route path="/profile" element={<>профиль</>} />
        <Route path="/food-list" element={<>список покупок</>} />
      </Routes>
    );
  }
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default connect(mapStateToProps)(Routing);
