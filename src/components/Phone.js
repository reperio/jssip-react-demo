import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import state from "../redux/store";
import "./style.css";
import "./bootstrap.min.css";

class Phone extends Component {
  constructor(props, context) {
    super(props);
    this.sendDTMF = this.sendDTMF.bind(this);
    this.stopCall = this.stopCall.bind(this);
    this.startCall = this.startCall.bind(this);
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
    destination: PropTypes.object,
  };

  startCall(e) {
    e.preventDefault();
    this.context.startCall(this.props.destination);
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

  // sendDTMFOne(e) {
  //   e.preventDefault();
  //   console.log("1 sent");
  //   this.context.sendDTMF(1, 100, 70);
  // }

  render() {
    const callStatus = this.context.call.status;
    const sipStatus = this.context.sip.status;

    let disableButton;
    let disableHangUpButton;
    let disableCallButton;

    if (callStatus === "callStatus/ACTIVE") {
      disableButton = false;
      disableHangUpButton = false;
      disableCallButton = true;
    } else if (callStatus === "callStatus/STARTING") {
      disableButton = true;
      disableHangUpButton = false;
      disableCallButton = true;
    } else {
      disableCallButton = false;
      disableButton = true;
      disableHangUpButton = true;
    }

    return (
      <Fragment>
        <div className="phone-wrap text-center">
          <p>{callStatus}</p>
          <p>{sipStatus}</p>
          <div className="btns-number mt-4">
            <div className="mt-1">
              <button
                disabled={disableButton}
                type="button"
                id="1"
                className="btn btn-lg btn-outline-dark"
                onClick={(e) => {
                  this.sendDTMF(e, "1");
                }}
              >
                <span className="dial-number">1</span>
              </button>
              <button
                disabled={disableButton}
                type="button"
                id="2"
                className="btn btn-lg btn-outline-dark"
                onClick={(e) => {
                  this.sendDTMF(e, "2");
                }}
              >
                <span className="dial-number">2</span>
                <span className="dial-litter">abc</span>
              </button>
              <button
                disabled={disableButton}
                type="button"
                id="3"
                className="btn btn-lg btn-outline-dark"
                onClick={(e) => {
                  this.sendDTMF(e, "3");
                }}
              >
                <span className="dial-number">3</span>
                <span className="dial-litter">def</span>
              </button>
            </div>

            <div className="mt-1">
              <button
                disabled={disableButton}
                type="button"
                id="4"
                className="btn btn-lg btn-outline-dark"
                onClick={(e) => {
                  this.sendDTMF(e, "4");
                }}
              >
                <span className="dial-number">4</span>
                <span className="dial-litter">ghi</span>
              </button>
              <button
                disabled={disableButton}
                type="button"
                id="5"
                className="btn btn-lg btn-outline-dark"
                onClick={(e) => {
                  this.sendDTMF(e, "5");
                }}
              >
                <span className="dial-number">5</span>
                <span className="dial-litter">jkl</span>
              </button>
              <button
                disabled={disableButton}
                type="button"
                id="6"
                className="btn btn-lg btn-outline-dark"
                onClick={(e) => {
                  this.sendDTMF(e, "6");
                }}
              >
                <span className="dial-number">6</span>
                <span className="dial-litter">mno</span>
              </button>
            </div>
            <div className="mt-1">
              <button
                disabled={disableButton}
                type="button"
                id="7"
                className="btn btn-lg btn-outline-dark"
                onClick={(e) => {
                  this.sendDTMF(e, "7");
                }}
              >
                <span className="dial-number">7</span>
                <span className="dial-litter">pqrs</span>
              </button>
              <button
                disabled={disableButton}
                type="button"
                id="8"
                className="btn btn-lg btn-outline-dark"
                onClick={(e) => {
                  this.sendDTMF(e, "8");
                }}
              >
                <span className="dial-number">8</span>
                <span className="dial-litter">tuv</span>
              </button>
              <button
                disabled={disableButton}
                type="button"
                id="9"
                className="btn btn-lg btn-outline-dark"
                onClick={(e) => {
                  this.sendDTMF(e, "9");
                }}
              >
                <span className="dial-number">9</span>
                <span className="dial-litter">wxyz</span>
              </button>
            </div>
            <div className="mt-1">
              <button
                disabled={disableButton}
                type="button"
                id="*"
                className="btn btn-lg btn-outline-dark"
                onClick={(e) => {
                  this.sendDTMF(e, "*");
                }}
              >
                <span className="dial-number">*</span>
              </button>
              <button
                disabled={disableButton}
                type="button"
                id="0"
                className="btn btn-lg btn-outline-dark"
                onClick={(e) => {
                  this.sendDTMF(e, "0");
                }}
              >
                <span className="dial-number">0</span>
                <span className="dial-litter">+</span>
              </button>
              <button
                disabled={disableButton}
                type="button"
                id="#"
                className="btn btn-lg btn-outline-dark"
                onClick={(e) => {
                  this.sendDTMF(e, "#");
                }}
              >
                <span className="dial-number">#</span>
              </button>
            </div>
          </div>
          <div className="btns-control mt-3 mb-3">
            <button
              disabled={disableCallButton}
              type="button"
              id="callbtn"
              className="btn btn-lg btn-success btn-call"
              onClick={this.startCall}
            >
              Call
            </button>
            <button
              disabled={disableHangUpButton}
              type="button"
              id="hangupbtn"
              className="btn btn-lg btn-danger btn-hangup"
              onClick={this.stopCall}
            >
              Hang up
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Phone;
