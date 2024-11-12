import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../Components/Header/Header.tsx';
import { useEffect } from 'react';
import { useStepContext } from '../assets/Contexts/StepContext.tsx';
import { useShowCancelContext } from '../assets/Contexts/ShowCancelContext.tsx';

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
      {/* Max width is only for developing, to make output look exactly like Figma. Should be removed. */}
      <div className={'max-w-[360px]'}>
        <Header title={'Kontaktinformationer'} text={'Indtast venligst din e-mailadresse og telefonnummer.'} />
      </div>
    </>
  );
}
