import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../Components/Header/Header.tsx';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { CtaButton } from '../Components/Cta/CtaButton.tsx';

export const Route = createFileRoute('/personoplysninger')({
  component: PersonalInfo,
});

function PersonalInfo() {
  const { setStep } = useStepContext();
  const { showCancel } = useShowCancelContext();

  useEffect(() => {
    setStep(2);
  }, [setStep]);

  if (showCancel) {
    return null;
  }

  return (
    <>
      <Header title={'Personoplysninger'} text={'Vi skal vide lidt mere om dig for at kunne oprette en Blå Konto.'} />

      <div className={'mt-40 mb-20'}>
        <CtaButton isPrimary={true} to={'/opret-login'}>
          Fortsæt
        </CtaButton>
      </div>
    </>
  );
}
