import React, { Component } from 'react';
import locale from '../../languages/locale';
import LangSwitchItem from './langSwitchItem';
import storage from '../../utils/storage';

class LagnSwithcher extends Component {
  constructor(props) {
    super(props);
    const langs = locale.languages.map((lang) => ({ id: lang, value: lang, isCurrent: false }));
    const currentLang = storage.get('clone-keeper')?.currentLang || langs[0].value;

    const curLangItem = langs.find((lang) => lang.value === currentLang);
    curLangItem.isCurrent = true;

    this.state = { currentLang, langs };
    this.changeHadler = this.changeHadler.bind(this);
  }

  changeHadler(curLang) {
    this.setState(({ langs }) => {
      const newLangs = langs.map((lang) => {
        const newLang = { ...lang };
        newLang.isCurrent = newLang.value === curLang;
        return newLang;
      });
      return { currentLang: curLang, langs: newLangs };
    });
  }

  render() {
    const { langs } = this.state;
    return (
      <div className="language-switcher">
        {
          langs.map((langItem) => (
            <LangSwitchItem
              {...langItem}
              key={langItem.id}
              onChange={this.changeHadler}
            />
          ))
        }
      </div>
    );
  }
}

export default LagnSwithcher;
