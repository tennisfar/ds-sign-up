import {AccountLogo} from '../AccountLogo/AccountLogo.tsx';
import {RichText} from "../RichText/RichText.tsx";
import {Title} from "../Title/Title.tsx";

type HeaderProps = {
    isDlo?: boolean;
    title: string;
    text?: any;
};

export const Header = ({title, isDlo, text}: HeaderProps) => {
    return (
        <div className={'flex flex-col gap-7 max-w-[40rem]'}>

            <div className={'flex flex-col gap-24'}>
                <AccountLogo isDlo={isDlo}/>
                <Title>{title}</Title>
            </div>

            <div className={'text-center'}>
                <RichText>{text}</RichText>
            </div>

        </div>
    );
}