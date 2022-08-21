/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import {
  Component,
  PropsWithChildren,
} from 'react';
import { lightTheme, darkTheme } from 'src/themes/filmder-mui-themes';
import i18n from 'i18next';
import { LanguageWidget } from 'src/widget/LanguageWidget';
import { DarkThemeWidget } from 'src/widget/DarkThemeWidget';
import { ScreenSizeWrapper } from '../ScreenSizeWrapper';

const RU = 'ru-RU';
const EN = 'en-US';

export class AppSettingsWrapper extends Component<PropsWithChildren, {light: boolean, lang: string}> {
  constructor(props: PropsWithChildren) {
    super(props);
    const light = localStorage.getItem('lightTheme') === 'true';
    const lang = localStorage.getItem('lang') || EN;
    i18n.changeLanguage(lang);

    this.state = {
      light,
      lang,
    };
  }

  onThemeChange() {
    this.setState(({ light }) => {
      localStorage.setItem('lightTheme', String(!light));
      return { light: !light };
    });
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
      <ThemeProvider theme={this.state.light ? lightTheme : darkTheme}>
        <ScreenSizeWrapper>
          <div className="h-14 flex items-center justify-end">
            <LanguageWidget lang={this.state.lang.toUpperCase()} onLangChange={() => this.onLangChange()} />
            <DarkThemeWidget isLightTheme={this.state.light} onThemeChange={() => { this.onThemeChange(); }} />
          </div>
          <CssBaseline />
          {this.props.children}
        </ScreenSizeWrapper>
      </ThemeProvider>
    );
  }
}
