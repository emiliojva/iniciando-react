import React from 'react';
import ReactDOM from 'react-dom/client';
// import AppBasico from './01-react-basico/App';
import AppHooks from './02-react-hooks/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <React.Fragment> */}
    {/* <AppBasico /> */}  {/* App base do 01-react-basico */}
    <AppHooks />           {/* App base do 02-react hooks  */}
  {/* </React.Fragment> */}
  </React.StrictMode>
);