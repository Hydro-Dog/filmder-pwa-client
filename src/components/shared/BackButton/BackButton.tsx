import { FC } from 'react';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';

export const BackButton: FC = () => {
  const navigate = useNavigate();
  const layout = (
    <div className="absolute top-0 rotate-180">
      <IconButton
        onClick={() => navigate(-1)}
        size="large"
        color="primary"
        aria-label="back-button"
      >
        <ForwardRoundedIcon />
      </IconButton>
    </div>
  );

  return ReactDOM.createPortal(layout, document.getElementById('screenSizeContainer')!);
};
