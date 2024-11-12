import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../Components/Header/Header.tsx';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { CtaButton } from '../Components/Cta/CtaButton.tsx';

export const Route = createFileRoute('/opret-login')({
  component: CreateLogin,
});

function CreateLogin() {
  const { setStep } = useStepContext();
  const { showCancel } = useShowCancelContext();

  useEffect(() => {
    setStep(3);
  }, [setStep]);

  if (showCancel) {
    return null;
  }

  return (
    <>
      <Header
        title={'Opret login'}
        text={
          'Vælg et brugernavn og en adgangskode, du kan huske. Så kan du hurtigt logge ind på din Blå Konto uden at skulle bruge MitID.'
        }
      />

      <div className={'mt-40 mb-20'}>
        <CtaButton isPrimary={true} to={'/indbetalingsgraense'}>
          Opret login
        </CtaButton>
      </div>
    </>
  );
}
