import {Link} from "@tanstack/react-router";

type CtaButtonProps = {
    isPrimary?: boolean;
    to?: string;
    href?: string;
    children?: string;
    fn?: () => void;
};

const cssBasePrimary = 'min-w-[24rem] h-56 flex justify-center items-center px-20 rounded-full bg-[#feb700] hover:bg-[#eaa800]';
const cssBaseSecondary = 'min-w-[24rem] h-56 flex justify-center items-center px-20 rounded-full bg-[white] border border-[#003a2766] hover:bg-[rgba(0,58,39,0.40);]';

export const CtaButton = ({isPrimary, to, fn, href, children}: CtaButtonProps) => {
    return (
        <>
            {to && (
                <Link to={to} className={`${isPrimary ? cssBasePrimary : cssBaseSecondary}`}>
                    <span className={'text-[black] text-[1.2rem] uppercase font-extrabold tracking-[0.1rem]'}>{children}</span>
                </Link>
            )}

            {!to && fn && (
                <button onClick={fn} className={`${isPrimary ? cssBasePrimary : cssBaseSecondary}`}>
                    <span className={'text-[black] text-[1.2rem] uppercase font-extrabold tracking-[0.1rem]'}>{children}</span>
                </button>
            )}

            {!to && !fn && href && (
                <a href={href} className={`${isPrimary ? cssBasePrimary : cssBaseSecondary}`}>
                    <span className={'text-[black] text-[1.2rem] uppercase font-extrabold tracking-[0.1rem]'}>{children}</span>
                </a>
            )}
            
        </>
    );
}