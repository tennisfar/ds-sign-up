import { ReactNode } from 'react';

type ContainerProps = {
  children?: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className={
        'max-w-[68rem] mx-auto min-h-[40rem] bg-white rounded-[1.2rem] px-60 pt-36 pb-40 flex flex-col items-center shadow-[0_2px_2px_0_rgba(0,0,0,0.12)] [text-wrap:pretty]'
      }
    >
      {children}
    </div>
  );
};
