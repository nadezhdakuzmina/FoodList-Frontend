import { render, hydrate } from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import { reducer, middleware } from '@store';
import App from '@app';

import DOMReady from '@utils/DOMReady';
import { IS_PRODUCTION, PRELOADED_STATE_KEY } from '@constants';

DOMReady.then(() => {
  const preloadedState = { ...window[PRELOADED_STATE_KEY] };
  delete window[PRELOADED_STATE_KEY];

  const store = createStore(reducer, preloadedState, middleware);
  const rootElement = document.getElementById('root');

  const app = (
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  );

  if (!IS_PRODUCTION) {
    render(app, rootElement);
  } else {
    hydrate(app, rootElement);
  }
});
