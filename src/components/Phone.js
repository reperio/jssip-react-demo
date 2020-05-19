import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import state from "../redux/store";
import TestDialMarkUp from "./TestDialMarkUp";

class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sip: "",
      call: "",
    };

    this.startCall = this.startCall.bind(this);
    this.stopCall = this.stopCall.bind(this);
    this.sendDTMF = this.sendDTMF.bind(this);
    this.sendDTMFOne = this.sendDTMFOne.bind(this);
  }

  static contextTypes = {
    sip: PropTypes.any,
    call: PropTypes.any,
    registerSip: PropTypes.func,
    unregisterSip: PropTypes.func,
    answerCall: PropTypes.func,
    startCall: PropTypes.func,
    stopCall: PropTypes.func,
    sendDTMF: PropTypes.func,
  };

  componentDidUpdate() {
    if (this.context.call !== this.state.call) {
      this.setState({
        call: this.context.call,
      });
    }
    if (this.context.sip !== this.state.sip) {
      this.setState({
        sip: this.context.sip,
      });
    }
  }

  componentDidMount() {
    this.setState({
      call: this.context.call,
      sip: this.context.sip,
    });
  }

  //Enter phone number here
  //"16143541111"
  startCall(e) {
    e.preventDefault();
    this.context.startCall("16143543760");
  }

  stopCall(e) {
    e.preventDefault();
    this.context.stopCall();
  }

  sendDTMF(e, number) {
    e.preventDefault();
    console.log(`${number} sent`);
    this.context.sendDTMF(number, 100, 70);
  }

  sendDTMFOne(e) {
    e.preventDefault();
    console.log("1 sent");
    this.context.sendDTMF(1, 100, 70);
  }

  render() {
    const callStatus = this.state.call.status;
    const sipStatus = this.state.sip.status;

    // let testDialMarkup;
    // if (callStatus === "callStatus/ACTIVE") {
    //   testDialMarkup = <p>Dialpad Ready</p>;
    // } else {
    //   testDialMarkup = <p>Dialpad Not Ready</p>;
    // }

    return (
      <div className="App">
        <p>{callStatus}</p>
        <p>{sipStatus}</p>
        <a href="#" onClick={this.startCall}>
          Start Call
        </a>
        <a href="#" onClick={this.stopCall}>
          End Call
        </a>
        <div>
          <TestDialMarkUp sendDTMF={this.context.sendDTMF} />
        </div>
      </div>
    );
  }
}

export default Phone;
