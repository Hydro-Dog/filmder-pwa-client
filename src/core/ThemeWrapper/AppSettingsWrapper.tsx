/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import {
  Component,
  PropsWithChildren,
} from 'react';
import { lightTheme, darkTheme } from 'src/themes/filmder-mui-themes';
import { DarkThemeWidget } from 'src/core/ThemeWrapper/components/DarkThemeWidget';
import { LanguageComponent } from 'src/core/LanguageComponent';
import { ScreenSizeWrapper } from 'src/core/ScreenSizeWrapper';

export class AppSettingsWrapper extends Component<PropsWithChildren, {light: boolean}> {
  constructor(props: PropsWithChildren) {
    super(props);
    const light = localStorage.getItem('lightTheme') === 'true';

    this.state = { light };
  }

  onThemeChange() {
    this.setState(({ light }) => {
      localStorage.setItem('lightTheme', String(!light));
      return { light: !light };
    });
  }

  // TODO: refactoring needed
  render() {
    return (
      <ThemeProvider theme={this.state.light ? lightTheme : darkTheme}>
        <ScreenSizeWrapper>
          <CssBaseline />
          <div className="flex h-screen flex-col">
            <div className="flex h-14 items-center justify-end">
              <LanguageComponent />
              <DarkThemeWidget isLightTheme={this.state.light} onThemeChange={() => { this.onThemeChange(); }} />
            </div>
            <div className="relative h-full">
              {this.props.children}
            </div>
            <div className="flex h-14 items-center justify-end" />
          </div>
        </ScreenSizeWrapper>
      </ThemeProvider>
    );
  }
}
