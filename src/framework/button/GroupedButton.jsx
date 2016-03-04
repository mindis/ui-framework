
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

import Button from './Button.jsx';

const GroupedButton = props => {
  const classes = classNames('button--grouped', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

GroupedButton.propTypes = Object.assign(Button.propTypes, {
  classes: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
});

export default GroupedButton;
