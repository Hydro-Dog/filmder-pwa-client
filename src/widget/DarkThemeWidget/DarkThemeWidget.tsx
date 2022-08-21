import { Button } from '@mui/material';
import { FC } from 'react';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';

type DarkThemeWidgetProps = {
    isLightTheme: boolean;
    onThemeChange: () => void
}

export const DarkThemeWidget: FC<DarkThemeWidgetProps> = ({ isLightTheme, onThemeChange }) => (
  <Button onClick={onThemeChange} variant="text">
    {isLightTheme ? <WbSunnyRoundedIcon /> : <WbTwilightRoundedIcon /> }
  </Button>
);
