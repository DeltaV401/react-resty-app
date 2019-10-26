import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Method from './components/Method';
import Body from './components/Body';
import Response from './components/Response';

import './styles/App.scss';

function App() {
  return (
    <>
      <Header />
      <Form />
      <Method />
      <Body />
      <Response />
      <Footer />
    </>
  );
}

export default App;
