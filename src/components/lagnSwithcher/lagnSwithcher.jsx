import React, { useState, useEffect } from 'react';
import locale from '../../languages/locale';
import LangSwitchItem from './langSwitchItem';
import storage from '../../utils/storage';

function LagnSwithcher(props) {
  const langs = locale.languages;
  const currentLang = storage.get('clone-keeper')?.currentLang || langs[0];
  const [curLang, setCurLang] = useState(currentLang);

  const langClickHandler = (newLang) => {
    setCurLang(newLang);
  };

  return (
    <div className="language-switcher" onClick={(evt) => setCurLang(evt.target.textContent)}>
      {
        langs.map((langName) => (
          <LangSwitchItem
            value={langName}
            isCurrent={langName === curLang}
            key={langName}
            onClick={langClickHandler}
          />
        ))
      }
    </div>
  );
}

export default LagnSwithcher;
