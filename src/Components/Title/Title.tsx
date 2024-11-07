type TitleProps = {
  children: string;
};

export const Title = ({children}: TitleProps) => {
  return (
    <div className={'font-ds font-black text-center text-32 mx-auto [_text-wrap:balance]'}>{children}</div>
  );
}