import React, { Component } from 'react';
import Calendar from '../../src/';
import style from '../../style.css';

class Demo extends Component {
  render() {
    return (
      <div>
        <Calendar
          style={style}
        />
      </div>
    );
  }
}

export default Demo;