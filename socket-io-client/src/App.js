import React, { Component } from "react";
import io from 'socket.io-client';
class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }
componentDidMount() {
    const { endpoint } = this.state;
    const socket = io(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {response
          ? <p>
              The temperature in Israel is: {response} °F
            </p>
          : <p>Loading...</p>}
      </div>
    );
  }
}
export default App;