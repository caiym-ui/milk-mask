/**
 * Mask of milk-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */

import React, { Component } from 'react';

import Mask from './../src';
import './Demo.scss';

class Demo extends Component {
  render() {
    return (
      <div className="demo-panel">
        <div className="demo-title">Title</div>
        <div className="demo-description">
          Fake Page 😀.
        </div>
        <div className="demo-item">
          <Mask />
        </div>
      </div>
    );
  }
}

export default Demo;
