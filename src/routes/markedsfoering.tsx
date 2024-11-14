import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { useDataContext } from '../Contexts/DataContext.tsx';
import { Title } from '../Components/Title/Title.tsx';
import { Text } from '../Components/Text/Text.tsx';
import { CtaLink } from '../Components/Cta/CtaButton.tsx';

export const Route = createFileRoute('/markedsfoering')({
  component: PlayResponsibly,
});

function PlayResponsibly() {
  const { setStep } = useStepContext();
  const { showCancel } = useShowCancelContext();
  const { data } = useDataContext();
  const { title, text, ctaLabelAccept, ctaLabelDecline, conditions } = data.markedsfoering;

  useEffect(() => {
    setStep(6);
  }, [setStep]);

  if (showCancel) {
    return null;
  }

  return (
    <>
      <Title wide={true}>{title}</Title>
      <Text wide={true}>{text}</Text>

      <div className={'mt-40 mb-20 flex flex-col gap-12'}>
        <CtaLink to={'/bekraeft'}>{ctaLabelAccept}</CtaLink>

        <CtaLink to={'/bekraeft'}>{ctaLabelDecline}</CtaLink>
      </div>

      <Text size={'small'}>{conditions}</Text>
    </>
  );
}
