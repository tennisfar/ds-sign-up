type RichTextProps = {
  children: any;
};

export const RichText = ({ children }: RichTextProps) => {
  return (
    <div className={`text-16 [&_a]:text-[#0089D6] [&_a]:underline`} dangerouslySetInnerHTML={{ __html: children }} />
  );
};
