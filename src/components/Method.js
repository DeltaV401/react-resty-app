import React from 'react';

function Method(props) {
  const handleClick = e => {
    e.preventDefault();
  }
  
  return (
    <>
      <div className="httpMethods">
        <form>
          <label><input name="methodType" type="radio" className="methodChecks"/>GET</label>
          <label><input name="methodType"  type="radio" className="methodChecks"/>POST</label>
          <label><input name="methodType"  type="radio" className="methodChecks"/>PUT</label>
          <label><input name="methodType"  type="radio" className="methodChecks"/>PATCH</label>
          <label><input name="methodType"  type="radio" className="methodChecks"/>DELETE</label>
          <button onClick={handleClick} name="submitMethod">Go!</button>
        </form>
      </div>
    </>
  )
}

export default Method;
