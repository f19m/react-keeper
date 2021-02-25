import React from 'react';
import PropTypes from 'prop-types';

function LangSwitchItem(props) {
  const { value, isCurrent } = props;
  const className = `header__dropdown-menu__language${isCurrent ? ' header__dropdown-menu__language--active' : ''}`;

  return (
    <span className={className}>
      {value}
    </span>
  );
}

LangSwitchItem.propTypes = {
  value: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool,
};

LangSwitchItem.defaultProps = {
  isCurrent: false,
};

export default LangSwitchItem;
