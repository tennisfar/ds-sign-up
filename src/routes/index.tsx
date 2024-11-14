import { createFileRoute } from '@tanstack/react-router';
import { CtaLink } from '../Components/Cta/CtaButton.tsx';
import { Text } from '../Components/Text/Text.tsx';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { Title } from '../Components/Title/Title.tsx';
import { useDataContext } from '../Contexts/DataContext.tsx';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const { setStep, setSteps } = useStepContext();
  const { showCancel } = useShowCancelContext();
  const { data } = useDataContext();
  const { title, text, getStartedLabel, logInLabel } = data.index;

  useEffect(() => {
    setStep(null);
    setSteps(null);
  }, [setStep, setSteps]);

  if (showCancel) {
    return null;
  }

  return (
    <>
      <Title>{title}</Title>
      <Text>{text}</Text>

      <div className={'mt-40 mb-20'}>
        <CtaLink to={'/kontaktinformationer'}>{getStartedLabel}</CtaLink>
      </div>

      <Text>{logInLabel}</Text>
    </>
  );
}
