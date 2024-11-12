import { Link } from '@tanstack/react-router';
import { useShowCancelContext } from '../../assets/Contexts/ShowCancelContext.tsx';

export const Jiras = () => {
  const { showCancel } = useShowCancelContext();

  return (
    <ul className="p-10 text-[1.4rem] mt-80 *:p-2">
      <li>
        <Link to="/" className="[&.active]:font-bold">
          IU-20304: Start oprettelse
        </Link>
      </li>
      <li>
        <Link className={showCancel ? 'font-bold' : ''}>IU-20305: Afbryd oprettelse</Link>
      </li>
      <li>
        <Link to="/kontaktinformationer" className="[&.active]:font-bold">
          IU-20306: Kontaktinformationer
        </Link>
      </li>
      <li>
        <Link to="/personoplysninger" className="[&.active]:font-bold">
          IU-20308: Personoplysninger
        </Link>
      </li>
    </ul>
  );
};
