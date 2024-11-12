type TextProps = {
  children: string | TrustedHTML;
  wide?: boolean;
  align?: 'left' | 'center';
  size?: 'small';
};

export const Text = ({ children, wide, size, align = 'center' }: TextProps) => {
  return (
    <div
      className={`${size === 'small' ? 'text-12' : 'text-16'} [&_a]:text-[#0089D6] [&_a]:underline mx-auto text-${align} ${wide ? 'max-w-[44rem]' : 'max-w-[39.2rem]'}`}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};
