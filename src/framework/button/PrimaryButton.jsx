
import React from 'react';
import classNames from 'classnames';

import Button from './Button.jsx';

const PrimaryButton = props => {
  const classes = classNames('button--primary', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

PrimaryButton.TYPE = Object.assign({}, Button.TYPE);

PrimaryButton.propTypes = Object.assign({}, Button.propTypes);

export default PrimaryButton;
