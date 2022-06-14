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
      summarySeen: false,
      confirmationSeen: false,
      current_id: null



    }

  }

  //functions;






// check out btn disappear, form 1 display and start an order record (get the record id in the db table)
  clickCheckOutBtn(e) {
    axios.post('/api/createId', {})
      .then(response => {
        console.log('this is the data after click:', response);
        let id = response.data.insertId;
        this.setState({
          current_id: id,
          homeDisplay: "none",
          f1Seen:true
        })

      }).catch(err => {
        console.log('Err getting data from API', err);
      })

  }

  hideF1ShowF2() {
    this.setState({
      f1Seen: false,
      f2Seen:true
    })
  }

  hideF2ShowF3() {
    this.setState({
      f2Seen: false,
      f3Seen:true
    })
  }

  hideF3ShowSummary() {
    this.setState({
      f3Seen: false,
      summarySeen:true
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

        {this.state.f1Seen? <F1
        cur_id = {this.state.current_id}
        toggleF1F2 = {this.hideF1ShowF2.bind(this)}


        /> : null}
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
      username: '',
      email: '',
      password: ''

    }
  }

  onChangeName(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  //save form1 data to db, form1 disappear, form2 display
  clickForm1NextBtn(e) {
    let id =this.props.cur_id;
    let form1Data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      id: id
    };
    axios.put(`/api/user-account-info/:${id}`, form1Data)
      .then(response => {
        console.log('Sucess add user account info!');
        this.props.toggleF1F2();
      }).catch (err => {console.log('Err add user account info!', err)})

  }

  render() {
    return (
      <div>
        <h3>Form 1: User Account Info</h3>
        <form>
          <label>Username:</label>
          <input onChange = {this.onChangeName.bind(this)} ></input>
          <br />
          <label>Email:</label>
          <input onChange = {this.onChangeEmail.bind(this)} ></input>
          <br />
          <label>Password:</label>
          <input onChange = {this.onChangePassword.bind(this)} ></input>
        </form>
        <button onClick = {this.clickForm1NextBtn.bind(this)}>Next</button>
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





















