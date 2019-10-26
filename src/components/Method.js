import React from 'react';

class Method extends React.Component {
  render() {
    return (
      <>
        <div className="httpMethods">
          <form>
            <label><input name="methodType" type="radio" className="methodChecks"/>GET</label>
            <label><input name="methodType"  type="radio" className="methodChecks"/>POST</label>
            <label><input name="methodType"  type="radio" className="methodChecks"/>PUT</label>
            <label><input name="methodType"  type="radio" className="methodChecks"/>PATCH</label>
            <label><input name="methodType"  type="radio" className="methodChecks"/>DELETE</label>
            <button onClick={this.handleClick} name="submitMethod">Go!</button>
          </form>
        </div>
      </>
    )
  }
}

export default Method;
