import React from 'react';
import PropTypes from 'prop-types';

function LangSwitchItem(props) {
  const { value, isCurrent, onClick } = props;
  const className = `header__dropdown-menu__language${isCurrent ? ' header__dropdown-menu__language--active' : ''}`;

  return (
    <span
      className={className}
      onClick={() => { onClick(value); }}
    >
      {value}
    </span>
  );
}

LangSwitchItem.propTypes = {
  value: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

LangSwitchItem.defaultProps = {
  isCurrent: false,
};

export default LangSwitchItem;
