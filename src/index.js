import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


// import { Navbar } from './Components/Navbar';
// import { Home } from './Components/Home';
// import { Restration } from './Components/Restration';
// import { Singin } from './Components/Singin';
// import { Movies } from './Components/Movies';
// import { PageNoteFound } from './Components/PageNoteFound';
import Store from './Reduxs/Store';
import App from './App'


// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={Store}>
    <React.StrictMode>
      {/* <Navbar /> */}
      <App />
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/restration' element={<Restration />}></Route>
          <Route path='/singin' element={<Singin />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='*' element={<PageNoteFound />}></Route>
        </Routes>
      </BrowserRouter> */}

    </React.StrictMode >
  </Provider >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
