type RichTextProps = {
  children: any;
  wide?: boolean;
};

export const RichText = ({ children, wide }: RichTextProps) => {
  return (
    <div
      className={`text-16 [&_a]:text-[#0089D6] [&_a]:underline mx-auto ${wide ? 'max-w-[44rem]' : 'max-w-[39.2rem]'}`}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};
