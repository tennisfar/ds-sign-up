import { AccountLogo } from '../AccountLogo/AccountLogo.tsx';
import { RichText } from '../RichText/RichText.tsx';
import { Title } from '../Title/Title.tsx';

type HeaderProps = {
  isDlo?: boolean;
  title: string;
  text?: string;
  alignText?: 'left' | 'center';
  wide?: boolean;
};

export const Header = ({ title, isDlo, text, wide, alignText = 'center' }: HeaderProps) => {
  return (
    <div className={'flex flex-col gap-8'}>
      <div className={'flex flex-col gap-24'}>
        <AccountLogo isDlo={isDlo} />
        <Title wide={wide}>{title}</Title>
      </div>

      <div className={`text-${alignText}`}>
        <RichText wide={wide}>{text}</RichText>
      </div>
    </div>
  );
};
