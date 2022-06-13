// import React from 'react';
// import ReactDOM from 'react-dom';
//not sure why import React and ReactDOM is not working. Add to index.html in script tag will work.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeDisplay: 'block',
      f1Seen: false,
      f2Seen: false,
      f3Seen: false,
      confirmationSeen: false


    }

  }

  //functions;
  clickCheckOutBtn(e) {
    this.setState({
      homeDisplay: "none",
      f1Seen:true
    })
  }



  //render;

  render() {
    return(
      <div>
        <h1>Check out forms</h1>
        <div className="Home" style={{display: this.state.homeDisplay}}>
          <h2>Click if you are ready to check out!</h2>
          <button
          onClick={this.clickCheckOutBtn.bind(this)}>Check Out</button>
        </div>

        {this.state.f1Seen? <F1 /> : null}
        {this.state.f2Seen? <F2 /> : null}
        {this.state.f3Seen? <F3 /> : null}
        {this.state.confirmationSeen? <Comfirmation /> : null}
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
        <h3>Form 1: User Account Info</h3>
        <form>
          <label>Username:</label>
          <input></input>
          <br />
          <label>Email:</label>
          <input></input>
          <br />
          <label>Password:</label>
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
        <h3>Form 2: Shipping Info</h3>
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
        <h3>Form 3: Billing Info</h3>
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

class Comfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3>Please confirm your order information</h3>
        <div>Username: </div>
        <div>Email: </div>
        <div>Password: </div>
        <div>Address: </div>
        <div>Phone Number: </div>
        <div>Credit Card #: </div>
        <div>CVV </div>
        <div>Billing Address </div>
        <button>Purchase</button>



      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));





















