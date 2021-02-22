import React from 'react';
import locale from '../../languages/locale';
import LangSwitchItem from './langSwitchItem';

function LagnSwithcher() {
  return (
    <div className="language-switcher">
      {
        locale.languages.map((langName, idx) => (
          <LangSwitchItem
            value={langName}
            defualt={idx === 0}
            key={langName}
          />
        ))
      }
    </div>
  );
}

export default LagnSwithcher;
