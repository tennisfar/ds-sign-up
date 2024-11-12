import { createFileRoute } from '@tanstack/react-router';
import { Container } from '../Components/Container/Container.tsx';
import { Header } from '../Components/Header/Header.tsx';
import { useEffect, useState } from 'react';
import { CancelSignUp } from '../Components/CancelSignUp/CancelSignUp.tsx';
import { useStepContext } from '../assets/Contexts/StepContext.tsx';

export const Route = createFileRoute('/personoplysninger')({
  component: PersonalInfo,
});

function PersonalInfo() {
  const { setStep } = useStepContext();

  useEffect(() => {
    setStep(2);
  }, [setStep]);

  const [showCancel, setShowCancel] = useState(false);

  const handleCancel = () => {
    setShowCancel(!showCancel);
  };

  return (
    <>
      {showCancel && <CancelSignUp handleCancel={handleCancel} />}

      {!showCancel && (
        <>
          {/*<TopBar handleCancel={handleCancel}/>*/}

          <Container>
            {/* Max width 392px is only for developing, to make output look exactly like Figma. Should be removed. */}
            <div className={'max-w-[392px]'}>
              <Header
                title={'Personoplysninger'}
                text={'Vi skal vide lidt mere om dig for at kunne oprette en Blå Konto.'}
              />
            </div>
          </Container>
        </>
      )}
    </>
  );
}
