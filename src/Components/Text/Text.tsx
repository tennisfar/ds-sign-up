type TextProps = {
  children: string | TrustedHTML;
  wide?: boolean;
  align?: 'left' | 'center';
  size?: 'small';
};

const cssTooltip = `
  relative
  underline
  decoration-dotted
  underline-offset-2
  cursor-pointer
  group
  after:invisible
  hover:after:visible
  active:after:visible
  after:content-[attr(tooltip)]
  after:absolute
  after:bottom-[2.2em]
  after:left-1/2
  after:translate-x-[-50%]
  after:translate-y-[5%]
  hover:after:translate-y-0
  after:bg-[#ebebeb]
  after:p-8
  after:pb-10
  after:text-12
  after:w-[max-content]
  after:max-w-[35ch]
  after:rounded-[0.5rem]
  after:text-center
  after:[text-wrap:balance]
  after:transition-transform
`;

export const Text = ({ children, wide, size, align = 'center' }: TextProps) => {
  if (typeof children === 'string') {
    children = children.replace(/ tooltip/gi, ` class="${cssTooltip}" tooltip`);
  }

  return (
    <div
      className={`${size === 'small' ? 'text-12' : 'text-16'} [&_a]:text-[#0089D6] [&_a]:underline mx-auto text-${align} ${wide ? 'max-w-[44rem]' : 'max-w-[39.2rem]'}`}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};
