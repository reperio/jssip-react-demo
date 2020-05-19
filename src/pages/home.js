import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SipProvider } from "@evercall/react-sip";

//components
import Phone from "../components/Phone";
import Dialpad1 from "../components/Dialpad1";

// const initialAppState = {
//     selected: "Nothing"
//   };

// const ContextContainer = React.createContext(null);

class home extends Component {
  render() {
    const { host, port, user, password } = this.props.sip;
    return (
      <SipProvider
        host={host}
        port={port}
        pathname="/ws" // Path in socket URI (e.g. wss://sip.example.com:7443/ws); "" by default
        user="user_EYrB693q6Z"
        password={"J8wKwN5YUYtv"} // usually required (e.g. from ENV or props)
        autoRegister={true} // true by default, see jssip.UA option register
        autoAnswer={false} // automatically answer incoming calls; false by default
        iceRestart={false} // force ICE session to restart on every WebRTC call; false by default
        sessionTimersExpires={120} // value for Session-Expires header; 120 by default
        extraHeaders={{
          // optional sip headers to send
          register: ["X-Foo: foo", "X-Bar: bar"],
          invite: ["X-Foo: foo2", "X-Bar: bar2"],
        }}
        iceServers={[
          {
            urls: [
              "stun:stun.l.google.com:19302",
              "stun:stun1.l.google.com:19302",
            ],
          },
        ]}
        debug={false} // whether to output events to console; false by default
      >
        <Phone />
        {/* <Dialpad1 /> */}
      </SipProvider>
    );
  }
}

home.propTypes = {
  sip: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sip: state.sip,
});

export default connect(mapStateToProps)(home);
