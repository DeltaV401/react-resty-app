import React from 'react';
import Form from './Form';
import Method from './Method';
import Body from './Body';
import Response from './Response';

function Main(props) {
  return (
    <>
      <main>
        <Form />
        <Method />
        <Body />
        <Response />
      </main>
    </>
  )
}

export default Main;