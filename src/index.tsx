import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import FirstPage from './pages/First/FirstPage';
import MyProfile from './Profile/MyProfile';
import { BrowserRouter,  Routes, Route  } from 'react-router-dom'

import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/style.css';
import MyExperience from './Profile/MyExperience';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" Component={MyProfile} />
      {/* <App /> */}
      {/* <FirstPage /> */}
      <Route  path='/myexprience' Component={MyExperience}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
