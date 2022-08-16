/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import { ThemeProvider } from '@emotion/react';
import { Button, CssBaseline, Switch } from '@mui/material';
import {
  Component,
  PropsWithChildren,
} from 'react';
import { lightTheme, darkTheme } from 'src/themes/filmder-mui-themes';
import i18n from 'i18next';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';

const RU = 'ru-RU';
const EN = 'en-US';

export class GlobalSettingsWrapper extends Component<PropsWithChildren, {light: boolean, lang: string}> {
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
        <div className="fixed right-0">
          <Button onClick={() => { this.onLangChange(); }} variant="text">
            {this.state.lang.split('-')[1]}
          </Button>
          <Button onClick={() => { this.onThemeChange(); }} variant="text">
            {this.state.light ? <WbSunnyRoundedIcon /> : <WbTwilightRoundedIcon /> }
          </Button>
        </div>
        <CssBaseline />
        {this.props.children}
      </ThemeProvider>
    );
  }
}
