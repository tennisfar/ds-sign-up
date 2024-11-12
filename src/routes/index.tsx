import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../Components/Header/Header.tsx';
import { CtaButton } from '../Components/Cta/CtaButton.tsx';
import { RichText } from '../Components/RichText/RichText.tsx';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';

export const Route = createFileRoute('/')({
  component: Index,
});

const data = {
  title: 'Opret en Blå Konto',
  isDlo: false,
  text:
    'En Blå Konto giver dig adgang til alle Sport & Casino Spil. Det vil sige, at du kan spille Oddset, eOddset, Casino, Live Casino, Bingo, Tips, Poker og Dantoto. Disse spil udbydes af Danske Licens Spil A/S.' +
    '<br/><br/>Du skal være minimum 18 år og have MitID for at kunne oprette en konto.' +
    '<br/><br/>Er du fra Færøerne og har IKKE et MitID?' +
    '<br/><a href="#/kontaktinformationer">Opret konto her</a>',
  getStartedLabel: 'Kom i gang',
  logInLabel: 'Har du allerede en konto? <a href="#/">Log ind her</a>',
};

function Index() {
  const { setStep, setSteps } = useStepContext();
  const { showCancel } = useShowCancelContext();

  useEffect(() => {
    setStep(null);
    setSteps(null);
  }, [setStep, setSteps]);

  if (showCancel) {
    return null;
  }

  return (
    <>
      <Header title={data.title} isDlo={data.isDlo} text={data.text} />

      <div className={'mt-40 mb-20'}>
        <CtaButton isPrimary={true} to={'kontaktinformationer'}>
          {data.getStartedLabel}
        </CtaButton>
      </div>

      <RichText>{data.logInLabel}</RichText>
    </>
  );
}
