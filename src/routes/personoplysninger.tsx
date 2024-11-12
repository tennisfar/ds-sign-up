import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { CtaButton } from '../Components/Cta/CtaButton.tsx';
import { useDataContext } from '../Contexts/DataContext.tsx';
import { Title } from '../Components/Title/Title.tsx';
import { RichText } from '../Components/RichText/RichText.tsx';

export const Route = createFileRoute('/personoplysninger')({
  component: PersonalInfo,
});

function PersonalInfo() {
  const { setStep } = useStepContext();
  const { showCancel } = useShowCancelContext();
  const { data } = useDataContext();
  const { title, text, ctaLabel } = data.personoplysninger;

  useEffect(() => {
    setStep(2);
  }, [setStep]);

  if (showCancel) {
    return null;
  }

  return (
    <>
      <Title>{title}</Title>
      <RichText>{text}</RichText>

      <div className={'mt-40 mb-20'}>
        <CtaButton isPrimary={true} to={'/opret-login'}>
          {ctaLabel}
        </CtaButton>
      </div>
    </>
  );
}
