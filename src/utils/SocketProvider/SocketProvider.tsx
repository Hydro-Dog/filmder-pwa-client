import { FC, useEffect } from 'react';
import { FilmderNotification, useNotificationsStore } from 'src/store/notifications';

export const SocketProvider: FC = () => {
  const addNotification = useNotificationsStore((state) => state.addNotification);
  const notification: FilmderNotification = { text: 'Text', actionLabel: 'Action', callback: () => {} };

console.log('SocketProvider')

  useEffect(()=>{
    setTimeout(() => {
        addNotification(notification);
        console.log('addNotification')
      }, 2000);

      setTimeout(() => {
        addNotification(notification);
        console.log('addNotification')
      }, 4000);
  }, [])

  return null;
};
