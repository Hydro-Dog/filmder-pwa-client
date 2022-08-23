import { FC } from 'react';
import { useNotificationsStore } from 'src/store/notifications';
import { FilmderAlert } from 'src/components/ui/FilmderAlert';

export const FilmderNotificationComponent: FC = () => {
  const notifications = useNotificationsStore((state) => state.notifications);
  return (
    <div className="absolute w-full">
      {notifications.map((item) => (
        <FilmderAlert item={item}/>
      ))}
    </div>
  );
};
