// import React from 'react';
// import ReactDOM from 'react-dom';
//not sure why import React and ReactDOM is not working. Add to index.html in script tag will work.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  //functions;


  //render;

  render() {
    return(
      <div>
        <h1>Check out forms</h1>
        <button>Check Out</button>
        <F1 />
        <F2 />
        <F3 />
      </div>
    )
  }


}


class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3>Form 1</h3>
        <form>
          <label>Username</label>
          <input></input>
          <br />
          <label>Password</label>
          <input></input>
        </form>
        <button>Next</button>
      </div>
    )
  }
}

class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3>Form 2</h3>
        <form>
          <label>Address</label>
          <input placeholder="line1..."></input>
          <input placeholder="line2..."></input>
          <input placeholder="City"></input>
          <input placeholder="State"></input>
          <input placeholder="Zipcode"></input>
          <br />
          <label>Phone number</label>
          <input></input>
        </form>
        <button>Next</button>
      </div>
    )
  }
};


class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3>Form 3</h3>
        <form>
          <label>Credit card #</label>
          <input placeholder="Your credit card # here..."></input>
          <label>Expiration Date</label>
          <input></input>
          <br />
          <label>CVV </label>
          <input></input>
          <br />
          <label>Billing Address </label>
          <input></input>
        </form>
        <button>Next</button>
      </div>
    )
  }
};



ReactDOM.render(<App />, document.getElementById('app'));





















