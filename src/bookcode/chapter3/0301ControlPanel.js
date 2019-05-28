import React, { Component } from 'react';
// basic
// import Counter from './0301Counter.js';
// import Summary from './0301Summary.js';

// dumb-smart
// import Counter from './0302Counter.js';
// import Summary from './0302Summary.js';

//content(报错 无法重现)
// import Counter from './0303Counter.js';
// import Summary from './0303Summary.js';

//react-redux
import Counter from './0304Counter.js';
import Summary from './0304Summary.js';

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
