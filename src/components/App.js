import React from 'react';
import { createFnlux } from 'fnlux';

export default class App extends React.Component {
  constructor() {
    super();
    this.fnlux = createFnlux(
      {statusModal: false},
      [],
      this.setState.bind(this));
    this.state = this.fnlux.state();
  }

  render() {
    return (
      <div className="App">
        app-web-base
      </div>
    );
  }
}
