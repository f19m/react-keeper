import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
// import reportWebVitals from './reportWebVitals';
import BG from 'components/bg';
import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';

function App() {
  return (
    <>
      <BG />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
