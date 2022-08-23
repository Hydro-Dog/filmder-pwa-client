import { FC } from 'react';
import { UserIdArea } from './components/UserIdArea';
import { CreateNewGameButton } from './components/CreateNewGameButton';
import { HowToPlayButton } from './components/HowToPlayButton';

export const MainPage: FC = () => (
  <div className="flex h-full">
    <div className="m-auto flex flex-col gap-2">
      <UserIdArea />
      <CreateNewGameButton />
      <HowToPlayButton />
    </div>
  </div>
);
