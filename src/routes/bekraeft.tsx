import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { useDataContext } from '../Contexts/DataContext.tsx';
import { Title } from '../Components/Title/Title.tsx';
import { Text } from '../Components/Text/Text.tsx';

export const Route = createFileRoute('/bekraeft')({
  component: PlayResponsibly,
});

function PlayResponsibly() {
  const { setStep } = useStepContext();
  const { showCancel } = useShowCancelContext();
  const { data } = useDataContext();
  const { title, text } = data.bekraeft;

  useEffect(() => {
    setStep(7);
  }, [setStep]);

  if (showCancel) {
    return null;
  }

  return (
    <>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </>
  );
}
