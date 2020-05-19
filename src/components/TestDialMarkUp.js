import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "../App.css";

class TestDialMarkUp extends Component {
  constructor(props) {
    super(props);
    this.sendDTMF = this.sendDTMF.bind(this);
  }
  static contextTypes = {
    sendDTMF: PropTypes.func,
  };

  sendDTMF(e, number) {
    e.preventDefault();
    console.log(`${number} sent`);
    this.context.sendDTMF(number, 100, 70);
  }

  render() {
    return (
      <>
        <button
          href="#"
          onClick={(e) => {
            this.sendDTMF(e, "1");
          }}
        >
          1
        </button>
        <button
          href="#"
          onClick={(e) => {
            this.sendDTMF(e, "2");
          }}
        >
          2
        </button>
        <button
          href="#"
          onClick={(e) => {
            this.sendDTMF(e, "3");
          }}
        >
          3
        </button>
        <button
          href="#"
          onClick={(e) => {
            this.sendDTMF(e, "4");
          }}
        >
          4
        </button>
        <button
          href="#"
          onClick={(e) => {
            this.sendDTMF(e, "5");
          }}
        >
          5
        </button>
        <button
          href="#"
          onClick={(e) => {
            this.sendDTMF(e, "6");
          }}
        >
          6
        </button>

        <button
          href="#"
          onClick={(e) => {
            this.sendDTMF(e, "7");
          }}
        >
          7
        </button>
        <button
          href="#"
          onClick={(e) => {
            this.sendDTMF(e, "8");
          }}
        >
          8
        </button>

        <button
          href="#"
          onClick={(e) => {
            this.sendDTMF(e, "9");
          }}
        >
          9
        </button>
        <button
          href="#"
          onClick={(e) => {
            this.sendDTMF(e, "*");
          }}
        >
          *
        </button>
        <button
          href="#"
          onClick={(e) => {
            this.sendDTMF(e, "0");
          }}
        >
          0
        </button>
        <button
          href="#"
          onClick={(e) => {
            this.sendDTMF(e, "#");
          }}
        >
          #
        </button>
        <div className="round-button">
          <div className="round-button-circle">
            <a href="#" className="round-button">
              Button!!
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default TestDialMarkUp;
