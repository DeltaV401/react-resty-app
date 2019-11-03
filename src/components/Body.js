import React from 'react';

function Body(props) {
  const handleClick = e => {
    e.preventDefault();
  }
  
  return (
    <>
      <form name="jsonBody">
        <input name="bodyJson" placeholder="Raw JSON Body" className="jsonBody"/>
        <button onClick={handleClick}>Headers</button>
      </form>
    </>
  )
}

export default Body;
