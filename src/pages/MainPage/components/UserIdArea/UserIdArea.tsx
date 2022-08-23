import { Paper, IconButton } from '@mui/material';
import { FC } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const UserIdArea: FC = () => (
  <div className="relative  w-full">
    <Paper sx={{ margin: '12px' }} elevation={5}>
      <div className="flex items-center justify-between gap-2">
        <div className="text-l py-2 px-3 font-semibold text-stone-500">Nickname Nickname Nickname</div>
        <IconButton
          size="small"
          color="primary"
          aria-label="back-button"
        >
          <ContentCopyIcon sx={{ width: '24px', height: '24px' }} />
        </IconButton>
      </div>
    </Paper>
  </div>
);
