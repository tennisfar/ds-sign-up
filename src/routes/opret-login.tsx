import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../Components/Header/Header.tsx';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';

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
      {/* Max width is only for developing, to make output look exactly like Figma. Should be removed. */}
      <div className={'max-w-[392px]'}>
        <Header
          title={'Opret login'}
          text={
            'Vælg et brugernavn og en adgangskode, du kan huske. Så kan du hurtigt logge ind på din Blå Konto uden at skulle bruge MitID.'
          }
        />
      </div>
    </>
  );
}
