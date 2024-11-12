import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../Components/Header/Header.tsx';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';

export const Route = createFileRoute('/markedsfoering')({
  component: PlayResponsibly,
});

function PlayResponsibly() {
  const { setStep } = useStepContext();
  const { showCancel } = useShowCancelContext();

  useEffect(() => {
    setStep(6);
  }, [setStep]);

  if (showCancel) {
    return null;
  }

  return (
    <>
      <Header
        title={'Vil du høre mere om vores gode tilbud, kampagner og nyheder?'}
        text={'Det kan f.eks. være når vi kører indbetalingsbonusser, gratis chancer eller nye spillerautomater.'}
        wide={true}
      />
    </>
  );
}
