import React from 'react';

class Body extends React.Component {
  render() {
    return (
      <>
        <form name="jsonBody">
          <input name="bodyJson" placeholder="Raw JSON Body" className="jsonBody"/>
          <button onClick={this.handleClick}>Headers</button>
        </form>
      </>
    )
  }
}

export default Body;
