/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LangSwitchItem extends Component {
  constructor(props) {
    super(props);
    this.name = props.value;
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { onChange } = this.props;
    onChange(this.name);
  }

  render() {
    const { value, isCurrent } = this.props;
    const className = `header__dropdown-menu__language${isCurrent ? ' header__dropdown-menu__language--active' : ''}`;

    return (
      <span
        className={className}
        onClick={this.clickHandler}
      >
        {value}
      </span>
    );
  }
}

LangSwitchItem.propTypes = {
  value: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

LangSwitchItem.defaultProps = {
  isCurrent: false,
};

export default LangSwitchItem;
