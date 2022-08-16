/* eslint-disable no-unused-vars */
import { FC, SetStateAction } from 'react';
import { Tab, Tabs } from '@mui/material';

type BottomTabsProps = {
    value: unknown,
    onValueChange: (event: any, newValue: SetStateAction<string>) => void
}

export const BottomTabs: FC<BottomTabsProps> = ({ value, onValueChange }: BottomTabsProps) => (
  <Tabs
    value={value}
    onChange={onValueChange}
    aria-label="secondary tabs example"
  >
    <Tab value="one" label="One" />
    <Tab value="two" label="Two" />
    <Tab value="three" label="Three" />
  </Tabs>
);
