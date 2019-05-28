import React, { Component } from 'react';
// basic
// import Counter from './0301Counter.js';
// import Summary from './0301Summary.js';

// dumb-smart
import Counter from './0302Counter.js';
import Summary from './0302Summary.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    return(
      <div style={style}>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr/>
        <Summary />
      </div>
    )
  }
}

export default ControlPanel;
