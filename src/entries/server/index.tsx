import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { discoverProjectStyles, getCriticalStyles } from 'used-styles';
import { Helmet } from 'react-helmet';

import App from '@app';

import { templator } from './html';
import { create } from './store';

import {
  SERVER_PORT,
  STATIC_PATH,
} from '@constants';

const expressApp = express();
const stylesLookup = discoverProjectStyles(STATIC_PATH);

const staticRouter = express.Router();
staticRouter.get('*', express.static(STATIC_PATH));
expressApp.use('/static', staticRouter);

expressApp.get(`*`, async (req, res) => {
  await stylesLookup;

  const helmet = Helmet.renderStatic();
  const store = create({ test: 'test' });
  const appHTML = renderToString(
    <StaticRouter location={req.url}>
      <App store={store} />
    </StaticRouter>
  );

  const preloadedState = store.getState();
  const criticalStyles = getCriticalStyles(appHTML, stylesLookup)
    .replace('data-used-styles="index.css"', '');

  const indexHTML = await templator(appHTML, preloadedState, [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
    criticalStyles,
  ]);

  res.contentType('text/html');
  res.status(200);

  return res.send(indexHTML);
});

expressApp.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port: ${SERVER_PORT}`);
});
