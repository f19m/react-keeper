import React, { useState, useEffect } from 'react';
import locale from '../../languages/locale';
import LangSwitchItem from './langSwitchItem';
import storage from '../../utils/storage';

function LagnSwithcher(props) {
  const langs = locale.languages.map((lang) => ({ id: lang, value: lang, isCurrent: false }));
  const currentLang = storage.get('clone-keeper')?.currentLang || langs[0].value;
  const curLangItem = langs.find((lang) => lang.value === currentLang);
  curLangItem.isCurrent = true;

  const [langArr, setLangArr] = useState(langs);
  const [curLang, setCurLang] = useState(currentLang);

  // useEffect(() => {
  //   console.log('useEffect');
  // }, [langArr]);

  const changeLangHadler = (evt) => {
    const { target } = evt;
    const newCurrentLang = target?.textContent;

    if (!newCurrentLang) return;

    const newLangArr = langArr.map((lang) => {
      const langItem = lang;
      langItem.isCurrent = (langItem.value === newCurrentLang);
      return lang;
    });

    setCurLang(newCurrentLang);
    setLangArr(newLangArr);
  };

  return (
    <div className="language-switcher" onClick={changeLangHadler}>
      {
        langArr.map((langItem) => {
          const { value, isCurrent } = langItem;

          return (
            <LangSwitchItem
              value={value}
              isCurrent={isCurrent}
              key={langItem.id}
            />
          );
        })
      }
    </div>
  );
}

export default LagnSwithcher;
