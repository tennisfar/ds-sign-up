import { AccountLogo } from '../AccountLogo/AccountLogo.tsx';
import { RichText } from '../RichText/RichText.tsx';
import { Title } from '../Title/Title.tsx';

type HeaderProps = {
  isDlo?: boolean;
  title: string;
  text?: string;
  alignText?: 'left' | 'center';
};

export const Header = ({ title, isDlo, text, alignText = 'center' }: HeaderProps) => {
  return (
    <div className={'flex flex-col gap-8 max-w-[40rem]'}>
      <div className={'flex flex-col gap-24'}>
        <AccountLogo isDlo={isDlo} />
        <Title>{title}</Title>
      </div>

      <div className={`text-${alignText}`}>
        <RichText>{text}</RichText>
      </div>
    </div>
  );
};
