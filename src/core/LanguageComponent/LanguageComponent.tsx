/* eslint-disable react/destructuring-assignment */
import { Button } from '@mui/material';
import { Component, PropsWithChildren } from 'react';
import i18n from 'i18next';

const RU = 'ru-RU';
const EN = 'en-US';

export class LanguageComponent extends Component<PropsWithChildren, { lang: string}> {
  constructor(props: any) {
    super(props);
    const lang = localStorage.getItem('lang') || EN;
    i18n.changeLanguage(lang);

    this.state = {
      lang,
    };
  }

  onLangChange() {
    this.setState(({ lang }) => {
      const newLang = lang === RU ? EN : RU;
      i18n.changeLanguage(newLang);
      localStorage.setItem('lang', newLang);
      return { lang: newLang };
    });
  }

  render() {
    return (
      <Button onClick={() => { this.onLangChange(); }} variant="text">
        {this.state.lang}
      </Button>
    );
  }
}
