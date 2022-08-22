import { FC, PropsWithChildren } from 'react';

export const ScreenSizeWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex">
    <div className="m-auto w-[800px]" id="screenSizeContainer">
      {children}
    </div>
  </div>
);
