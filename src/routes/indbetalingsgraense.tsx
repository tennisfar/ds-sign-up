import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../Components/Header/Header.tsx';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { CtaButton } from '../Components/Cta/CtaButton.tsx';

export const Route = createFileRoute('/indbetalingsgraense')({
  component: CreateLogin,
});

function CreateLogin() {
  const { setStep } = useStepContext();
  const { showCancel } = useShowCancelContext();

  useEffect(() => {
    setStep(4);
  }, [setStep]);

  if (showCancel) {
    return null;
  }

  return (
    <>
      {/* Max width is only for developing, to make output look exactly like Figma. Should be removed. */}
      <div className={'max-w-[392px]'}>
        <Header
          title={'Sæt din indbetalingsgrænse'}
          text={
            'Med en indbetalingsgrænse sikrer du, at du ikke indbetaler flere penge til din spilkonto, end du på forhånd har besluttet dig for.'
          }
        />
      </div>

      <div className={'mt-40 mb-20'}>
        <CtaButton isPrimary={true} to={'/spil-med-omtanke'}>
          Sæt grænse
        </CtaButton>
      </div>
    </>
  );
}
