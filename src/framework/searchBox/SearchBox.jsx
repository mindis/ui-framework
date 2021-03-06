
import React, {
  Component,
  PropTypes,
} from 'react';

import classNames from 'classnames';

export default class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp(event) {
    // Always search when the user hits Enter.
    if (event.key === 'Enter') {
      return this.search();
    }

    // Otherwise, allow searching if isImmediate.
    if (this.props.isImmediate) {
      return this.search();
    }
  }

  search() {
    const searchField = this.refs.searchField;
    this.props.onSearch(searchField.value);
  }

  render() {
    const classes = classNames('searchBox__input', {
      'searchBox__input--fullWidth': this.props.isFullWidth,
    });

    return (
      <label className="searchBox">
        <input
          className={classes}
          defaultValue={this.props.defaultValue}
          onKeyUp={this.onKeyUp}
          placeholder={this.props.placeholder}
          ref="searchField"
          type="text"
        />
        <span className="searchBox__icon icon icon-magnifier"/>
      </label>
    );
  }
}

SearchBox.propTypes = {
  defaultValue: PropTypes.string,
  isFullWidth: PropTypes.bool,
  isImmediate: PropTypes.bool,
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
