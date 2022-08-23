import { Paper, IconButton } from '@mui/material';
import { FC } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTranslation } from 'react-i18next';

export const UserIdArea: FC = () => {
  const { t } = useTranslation(['translation']);
  return (
    <div className="relative  mb-10 flex w-full flex-col items-center">
      <div className="text-stone-500 font-semibold">
        {t('YOUR_ID')}
        :
      </div>
      <Paper elevation={5}>
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
};
