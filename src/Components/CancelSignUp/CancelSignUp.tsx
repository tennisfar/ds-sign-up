import { TopBar } from '../TopBar/TopBar.tsx';
import { Container } from '../Container/Container.tsx';
import { Header } from '../Header/Header.tsx';
import { CtaButton } from '../Cta/CtaButton.tsx';

type CancelSignUpProps = {
  handleCancel?: any;
};

export const CancelSignUp = ({ handleCancel }: CancelSignUpProps) => {
  return (
    <>
      <TopBar hideCancel={true} handleCancel={handleCancel} />

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
