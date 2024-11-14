import { Link } from '@tanstack/react-router';

type CtaProps = {
  disabled?: boolean;
  layout?: 'primary' | 'secondary';
  to?: string;
  href?: string;
  children?: string;
  fn?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const styleBase =
  'min-w-[24rem] h-56 flex justify-center items-center px-20 rounded-full text-[black] text-[1.2rem] uppercase font-extrabold tracking-[0.1rem]';
const stylePrimary = 'bg-[#feb700] hover:bg-[#eaa800]';
const styleSecondary = 'bg-[white] border border-[#003a2766] hover:bg-[rgba(0,58,39,0.40);]';
const styleDisabled = 'text-[rgba(0,0,0,0.40)] bg-[rgba(34,34,34,0.30)] pointer-events-none';

const style = ({ layout, disabled }: CtaProps) => {
  return `${styleBase} ${layout === 'primary' ? stylePrimary : layout === 'secondary' ? styleSecondary : ''} ${disabled ? styleDisabled : ''}`;
};

export const CtaHref = ({ children, disabled, layout = 'primary', href }: CtaProps) => {
  return (
    <a href={href} className={style({ layout, disabled })}>
      {children}
    </a>
  );
};

export const CtaFn = ({ children, disabled, layout = 'primary', fn }: CtaProps) => {
  return (
    <button onClick={fn} className={style({ layout, disabled })}>
      {children}
    </button>
  );
};

export const CtaLink = ({ children, disabled, layout = 'primary', to }: CtaProps) => {
  return (
    <Link to={to} disabled={disabled} className={style({ layout, disabled })}>
      {children}
    </Link>
  );
};

export const CtaSubmitForm = ({ children, disabled, layout = 'primary' }: CtaProps) => {
  return (
    <button type={'submit'} disabled={disabled} className={style({ layout, disabled })}>
      {children}
    </button>
  );
};
