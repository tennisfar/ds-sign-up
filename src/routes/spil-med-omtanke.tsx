import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { CtaButton } from '../Components/Cta/CtaButton.tsx';
import { useDataContext } from '../Contexts/DataContext.tsx';
import { Title } from '../Components/Title/Title.tsx';
import { RichText } from '../Components/RichText/RichText.tsx';

export const Route = createFileRoute('/spil-med-omtanke')({
  component: PlayResponsibly,
});

function PlayResponsibly() {
  const { setStep } = useStepContext();
  const { showCancel } = useShowCancelContext();
  const { data } = useDataContext();
  const { title, text, ctaLabel } = data.spilMedOmtanke;

  useEffect(() => {
    setStep(5);
  }, [setStep]);

  if (showCancel) {
    return null;
  }

  return (
    <>
      <Title>{title}</Title>
      <RichText align={'left'}>{text}</RichText>

      <div className={'mt-40 mb-20'}>
        <CtaButton isPrimary={true} to={'/markedsfoering'}>
          {ctaLabel}
        </CtaButton>
      </div>
    </>
  );
}
