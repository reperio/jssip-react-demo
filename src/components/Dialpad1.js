import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import state from "../redux/store";

// import {
//   CALL_STATUS_ACTIVE,
//   CALL_STATUS_IDLE,
//   CALL_STATUS_STARTING,
//   SIP_STATUS_CONNECTED,
// } from "react-sip";

class Dialpad1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sip: "",
      call: "",
    };

    this.startCall = this.startCall.bind(this);
    this.stopCall = this.stopCall.bind(this);
  }

  static contextTypes = {
    sip: PropTypes.any,
    call: PropTypes.any,
    registerSip: PropTypes.func,
    unregisterSip: PropTypes.func,
    answerCall: PropTypes.func,
    startCall: PropTypes.func,
    stopCall: PropTypes.func,
  };

  componentDidUpdate() {
    console.log(this.context.call);
    if (this.context.call !== this.state.call) {
      this.setState({
        //   sip: this.context.sip,
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
      //   sip: this.context.sip,
      call: this.context.call,
      sip: this.context.sip,
    });
  }

  //   UNSAFE_componentWillReceiveProps() {
  //     console.log(this.context.call);
  //     this.setState({
  //       //   sip: this.context.sip,
  //       call: this.context.call,
  //     });
  //     // fire an action here
  //   }

  startCall(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    this.context.startCall("16143543760");
  }
  stopCall(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    this.context.stopCall();
  }

  render() {
    const callStatus = this.state.call.status;
    const sipStatus = this.state.sip.status;

    let updatedCallStatus = callStatus;
    let updatedSipStatus = sipStatus;
    let dialMarkip;

    if (sipStatus === "sipStatus/REGISTERED") {
      dialMarkip = <p>Not registered....</p>;
    } else {
      dialMarkip = <p>Not registered....</p>;
    }

    return <div className="App">hi</div>;
  }
}

export default Dialpad1;
