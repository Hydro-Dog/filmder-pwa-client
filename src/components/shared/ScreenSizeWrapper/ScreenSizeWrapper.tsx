import { FC, PropsWithChildren } from 'react';

export const ScreenSizeWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex h-screen w-screen">
    <div className="relative m-auto h-screen w-[800px]" id="screenSizeContainer">
      {children}
    </div>
  </div>
);
