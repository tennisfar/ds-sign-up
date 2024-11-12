type TitleProps = {
  children: string;
  wide?: boolean;
};

export const Title = ({ children, wide }: TitleProps) => {
  return (
    <div className={`font-ds font-black text-center text-32 mx-auto mb-8 ${wide ? 'max-w-[56rem]' : 'max-w-[40rem]'}`}>
      {children}
    </div>
  );
};
