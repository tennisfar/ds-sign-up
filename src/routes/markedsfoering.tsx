import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { useDataContext } from '../Contexts/DataContext.tsx';
import { Title } from '../Components/Title/Title.tsx';
import { Text } from '../Components/Text/Text.tsx';

export const Route = createFileRoute('/markedsfoering')({
  component: PlayResponsibly,
});

function PlayResponsibly() {
  const { setStep } = useStepContext();
  const { showCancel } = useShowCancelContext();
  const { data } = useDataContext();
  const { title, text } = data.markedsfoering;

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
    </>
  );
}
