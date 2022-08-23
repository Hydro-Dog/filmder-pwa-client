/* eslint-disable react/require-default-props */
import {
  Zoom, Alert, Button, IconButton, Collapse,
} from '@mui/material';
import {
  FC, useCallback, useEffect, useRef, useState,
} from 'react';
import { FilmderNotification } from 'src/store/notifications';
import CloseIcon from '@mui/icons-material/Close';

type FilmderAlertProps = {
    item:FilmderNotification;
    timer?: number;
}

export const FilmderAlert: FC<FilmderAlertProps> = ({ item, timer = 2000 }) => {
  const ref = useRef<any>();
  const [showAlert, setShowAlert] = useState(true);
  const onActionClick = useCallback(() => {
    // ref.current.classList.add('fade-away');
  }, []);

  const onClose = useCallback(() => {
    setShowAlert(false);
    setTimeout(() => { ref.current.remove(); }, 500);
  }, []);

  useEffect(() => {
    if (timer) {
      setTimeout(() => {
        setShowAlert(false);
        setTimeout(() => {
          ref.current.remove();
        }, 500);
      }, timer);
    }
  }, [ref]);

  // TODO: remove two transition components (Collapse, Zoom), leave only one
  // TODO: set theme colors to alert component!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <div ref={ref} className="mb-1">
      <Collapse in={showAlert}>
        <Zoom in mountOnEnter unmountOnExit>
          <Alert
            sx={{ display: 'flex', alignItems: 'center' }}
            action={(
              <div>
                <Button onClick={onActionClick} color="inherit" size="small">
                  {item.actionLabel}
                </Button>
                <IconButton onClick={onClose} aria-label="delete">
                  <CloseIcon />
                </IconButton>
              </div>
        )}
          >
            {item.text}
          </Alert>
        </Zoom>
      </Collapse>
    </div>

  );
};
