import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from 'app';

import { AppContextProvider } from 'context/appContext';
import store from 'redux/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './app';
// import 'antd/dist/reset.css';
// import './App.css';
// import * as serviceWorker from './serviceWorker';

// import { Router as RouterHistory } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import history from 'utils/history';
// import store from 'redux/store';

// import { AppContextProvider } from 'context/appContext';

// ReactDOM.render(
//   <RouterHistory history={history}>
//     <Provider store={store}>
//       <AppContextProvider>
//         <App />
//       </AppContextProvider>
//     </Provider>
//   </RouterHistory>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
