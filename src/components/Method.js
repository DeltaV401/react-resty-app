import React from 'react';

class Method extends React.Component {
  render() {
    return (
      <>
        <div className="httpMethods">
          <form>
            <label><input name="methodType" type="radio" className={this.methodClass}/>GET</label>
            <label><input name="methodType"  type="radio" className={this.methodClass}/>POST</label>
            <label><input name="methodType"  type="radio" className={this.methodClass}/>PUT</label>
            <label><input name="methodType"  type="radio" className={this.methodClass}/>PATCH</label>
            <label><input name="methodType"  type="radio" className={this.methodClass}/>DELETE</label>
            <button onClick={this.handleClick} name="submitMethod">Go!</button>
          </form>
        </div>
      </>
    )
  }
}

export default Method;
