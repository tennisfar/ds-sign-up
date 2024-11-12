import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../Components/Header/Header.tsx';
import { useEffect } from 'react';
import { useStepContext } from '../assets/Contexts/StepContext.tsx';
import { useShowCancelContext } from '../assets/Contexts/ShowCancelContext.tsx';

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
      {/* Max width is only for developing, to make output look exactly like Figma. Should be removed. */}
      <div className={'max-w-[392px]'}>
        <Header title={'Personoplysninger'} text={'Vi skal vide lidt mere om dig for at kunne oprette en Blå Konto.'} />
      </div>
    </>
  );
}
