import React from 'react';
import ReactDOM from 'react-dom/client';
// import AppBasico from './01-react-basico/App';
// import AppHooks from './02-react-hooks/App';
import AppFormularios from './04-formularios/AppFormularios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <React.Fragment> */}
    {/* <AppBasico /> */}  {/* App base do 01-react-basico */}
    {/* <AppHooks /> */ }  {/* App base do 02-react hooks  */}
    <AppFormularios />     {/*   */}
  {/* </React.Fragment> */}
  </React.StrictMode>
);