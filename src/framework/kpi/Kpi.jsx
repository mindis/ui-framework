
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

export {
  default as KpiPositive,
} from './KpiPositive.jsx';

export {
  default as KpiNegative,
} from './KpiNegative.jsx';

class Kpi extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const className = classNames(
      'kpi',
      this.props.className
    );

    return (
      <span
        className={className}
        title={this.props.title}
      >
        {this.props.children}
      </span>
    );
  }
}

Kpi.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Kpi;
