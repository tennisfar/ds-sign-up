import { Container } from '../Container/Container.tsx';
import { Header } from '../Header/Header.tsx';
import { CtaButton } from '../Cta/CtaButton.tsx';
import { useShowCancelContext } from '../../assets/Contexts/ShowCancelContext.tsx';

export const CancelSignUp = () => {
  const { showCancel, setShowCancel } = useShowCancelContext();

  if (!showCancel) {
    return null;
  }

  const handleCancel = () => {
    setShowCancel(false);
  };

  return (
    <>
      <Container>
        <Header title={'Vil du annullere oprettelsen af din Blå Konto?'} />

        <div className={'mt-30 flex flex-col gap-12'}>
          <CtaButton isPrimary={true} fn={handleCancel}>
            Nej, opret ny konto
          </CtaButton>
          <CtaButton href={'/'}>Ja, annuller og luk</CtaButton>
        </div>
      </Container>
    </>
  );
};
