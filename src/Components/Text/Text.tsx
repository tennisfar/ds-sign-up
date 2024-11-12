type TextProps = {
  children: string | TrustedHTML;
  wide?: boolean;
  align?: 'left' | 'center';
};

export const Text = ({ children, wide, align = 'center' }: TextProps) => {
  return (
    <div
      className={`text-16 [&_a]:text-[#0089D6] [&_a]:underline mx-auto text-${align} ${wide ? 'max-w-[44rem]' : 'max-w-[39.2rem]'}`}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};
