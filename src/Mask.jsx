/**
 * Mask of milk-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */


import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './index.scss';

class Mask extends Component {
  static propTypes = {
    className: PropTypes.string,
    transparent: PropTypes.bool,
  }

  static defaultProps = {
    className: '',
    transparent: true,
  }

  render() {
    const { className, transparent, ...others } = this.props;
    const classNames = classnames(
      'milk-mask',
      { 'milk-mask_transparent': transparent },
      className
    );

    return (
      <div className={classNames} {...others} />
    );
  }
}

export default Mask;
