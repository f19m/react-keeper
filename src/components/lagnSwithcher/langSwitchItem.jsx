import React from 'react';
import PropTypes from 'prop-types';

function LangSwitchItem({ value = null, defualt = null }) {
  const className = `header__dropdown-menu__language${defualt ? ' header__dropdown-menu__language--active' : ''}`;
  return (
    <span className={className}>
      {value}
    </span>
  );
}

LangSwitchItem.propTypes = {
  value: PropTypes.string.isRequired,
  defualt: PropTypes.bool,
};

LangSwitchItem.defaultProps = {
  defualt: '0',
};

export default LangSwitchItem;
