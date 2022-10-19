import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router';
import { Helmet } from 'react-helmet';

import Layout from '@containers/Layout';
import Main from '@pages/Main';
import Frige from '@pages/Frige';
import FoodList from '@pages/FoodList';


import type { FC } from 'react';
import type * as T from './types';

import 'antd/dist/antd.min.css';
import '@assets/styles/common.scss';
import '@assets/styles/variables.scss';
const App: FC<T.AppProps> = ({
  store,
}) => (
  <>
    <Helmet>
      <title>FoodList</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    </Helmet>
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/frige" element={<Frige />} />
          <Route path="/foodList" element={<FoodList />} />
        </Routes>
      </Layout>
    </Provider>
  </>
);

export default App;
