import { Alert, Button, Slide } from '@mui/material';
import { FC, Fragment } from 'react';
import { useNotificationsStore } from 'src/store/notifications';

export const AlertComponent: FC = () => {
  const notifications = useNotificationsStore((state) => state.notifications);
  return (
    <>
      {notifications.map((item) => (
        <Fragment key={item.text}>
          <Slide direction="down" in mountOnEnter unmountOnExit>
            <Alert
              action={(
                <Button color="inherit" size="small">
                  {item.actionLabel}
                </Button>
                )}
            >
              {item.text}
            </Alert>
          </Slide>
        </Fragment>
      ))}
    </>
  );
};
