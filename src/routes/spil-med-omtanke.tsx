import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../Components/Header/Header.tsx';
import { useEffect } from 'react';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { CtaButton } from '../Components/Cta/CtaButton.tsx';

export const Route = createFileRoute('/spil-med-omtanke')({
  component: PlayResponsibly,
});

function PlayResponsibly() {
  const { setStep } = useStepContext();
  const { showCancel } = useShowCancelContext();

  useEffect(() => {
    setStep(5);
  }, [setStep]);

  if (showCancel) {
    return null;
  }

  return (
    <>
      {/* Max width is only for developing, to make output look exactly like Figma. Should be removed. */}
      <div className={'max-w-[392px]'}>
        <Header
          title={'Spil med omtanke'}
          text={
            'Hos Danske Spil er det afgørende, at vores spil er underholdende, og at spillet foregår med omtanke.' +
            '<br/><br/>' +
            'Vi er forpligtet til at sikre ansvarligt spil. Derfor arbejder vi løbende med at opfange uhensigtsmæssig spilleadfærd, så vi har mulighed for at tilbyde dig råd og sparring i tide.' +
            '<br/><br/>' +
            'Hvis vi vurderer, at der er tegn på spilleadfærd, der kan føre til spilleafhængighed, kan vi kontakte dig med tilbud om rådgivning. Du kan til enhver tid tilbagekalde dit samtykke ved at lukke din profil under dine profilindstillinger eller skrive en e-mail til DataProtectionManager@danskespil.dk.' +
            '<br/><br/>' +
            'Læs mere om behandling af dine personoplysninger i Danske Spils privatlivspolitik.'
          }
          alignText={'left'}
        />
      </div>

      <div className={'mt-40 mb-20'}>
        <CtaButton isPrimary={true} to={'/markedsfoering'}>
          Accepter og fortsæt
        </CtaButton>
      </div>
    </>
  );
}
