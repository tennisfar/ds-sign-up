import { Link } from '@tanstack/react-router';
import { useShowCancelContext } from '../../Contexts/ShowCancelContext.tsx';

export const Jiras = () => {
  const { showCancel, setShowCancel } = useShowCancelContext();

  const handleCancel = () => {
    setShowCancel(!showCancel);
  };

  return (
    <ul className="p-10 text-[1.4rem] mt-80 *:p-2">
      <li>
        <Link to="/" className="[&.active]:font-bold">
          IU-20304: Start oprettelse
        </Link>
      </li>
      <li>
        <Link className={showCancel ? 'font-bold' : ''} onClick={handleCancel}>
          IU-20305: Afbryd oprettelse
        </Link>
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
      <li>
        <Link to="/opret-login" className="[&.active]:font-bold">
          IU-20309: Opret login
        </Link>
      </li>
      <li>
        <Link to="/indbetalingsgraense" className="[&.active]:font-bold">
          IU-20310: Indbetalingsgrænse
        </Link>
      </li>
      <li>
        <Link to="/spil-med-omtanke" className="[&.active]:font-bold">
          IU-20311: Spil med omtanke
        </Link>
      </li>
      <li>
        <Link to="/markedsfoering" className="[&.active]:font-bold">
          IU-20312: Markedsføring
        </Link>
      </li>
      <li>
        <Link to="/bekraeft" className="[&.active]:font-bold">
          IU-20314: Bekræft med MitID
        </Link>
      </li>
    </ul>
  );
};
