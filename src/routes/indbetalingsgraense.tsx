import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { CtaLink } from '../Components/Cta/CtaButton.tsx';
import { useDataContext } from '../Contexts/DataContext.tsx';
import { Title } from '../Components/Title/Title.tsx';
import { Text } from '../Components/Text/Text.tsx';

export const Route = createFileRoute('/indbetalingsgraense')({
  component: CreateLogin,
});

function CreateLogin() {
  const { setStep } = useStepContext();
  const { showCancel } = useShowCancelContext();
  const { data } = useDataContext();
  const { title, text, ctaLabel } = data.indbetalingsgraense;

  useEffect(() => {
    setStep(4);
  }, [setStep]);

  if (showCancel) {
    return null;
  }

  return (
    <>
      <Title>{title}</Title>
      <Text>{text}</Text>

      <div className={'mt-40 mb-20'}>
        <CtaLink to={'/spil-med-omtanke'}>{ctaLabel}</CtaLink>
      </div>
    </>
  );
}
