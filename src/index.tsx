import './index.css';

import { persistedStore, store } from './store';

import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
                <App/>
            </PersistGate>
        </Provider>
    );

    reportWebVitals();
}

