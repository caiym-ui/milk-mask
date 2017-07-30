/**
 * Mask of milkui-component
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
      <div className="demo__panel">
        <div className="demo__title">Milk Ui</div>
        <div className="demo__description">
          Demo Page 😀.
        </div>
        <div className="demo__item">
          <Mask />
        </div>
      </div>
    );
  }
}

export default Demo;
