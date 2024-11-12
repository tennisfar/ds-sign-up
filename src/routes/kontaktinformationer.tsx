import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../Components/Header/Header.tsx';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { CtaButton } from '../Components/Cta/CtaButton.tsx';

export const Route = createFileRoute('/kontaktinformationer')({
  component: ContactInfo,
});

function ContactInfo() {
  const { setStep, setSteps } = useStepContext();
  const { showCancel } = useShowCancelContext();

  useEffect(() => {
    setStep(1);
    setSteps(7);
  }, [setStep, setSteps]);

  if (showCancel) {
    return null;
  }

  return (
    <>
      <Header title={'Kontaktinformationer'} text={'Indtast venligst din e-mailadresse og telefonnummer.'} />

      <div className={'mt-40 mb-20'}>
        <CtaButton isPrimary={true} to={'/personoplysninger'}>
          Fortsæt
        </CtaButton>
      </div>
    </>
  );
}
