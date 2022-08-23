import { FC } from 'react';
import { Button } from '@mui/material';
import { useNotificationsStore } from 'src/store/notifications';
import { UserIdArea } from './components/UserIdArea';
import { CreateNewGameButton } from './components/CreateNewGameButton';
import { HowToPlayButton } from './components/HowToPlayButton';

export const MainPage: FC = () => {
  const addNotification = useNotificationsStore((state) => state.addNotification);
  return (
    <div className="flex h-full">
      <div className="m-auto flex flex-col gap-2">
        <UserIdArea />
        <CreateNewGameButton />
        <HowToPlayButton />

        <Button onClick={() => {
          addNotification({
            text: 'hello', actionLabel: 'world', actionCallback: () => {}, id: String(Math.random()),
          });
        }}
        >
          Hello
        </Button>
      </div>
    </div>
  );
};
