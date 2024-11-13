import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { CtaButton } from '../Components/Cta/CtaButton.tsx';
import { useDataContext } from '../Contexts/DataContext.tsx';
import { Title } from '../Components/Title/Title.tsx';
import { Text } from '../Components/Text/Text.tsx';
import '../Components/FormElements/PhoneInput/style.less';
import dk from '../Components/FormElements/PhoneInput/da.json';

export const Route = createFileRoute('/kontaktinformationer')({
  component: ContactInfo,
});

function ContactInfo() {
  const { setStep, setSteps } = useStepContext();
  const { showCancel } = useShowCancelContext();
  const { data } = useDataContext();
  const { title, text, ctaLabel } = data.kontaktinformationer;
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setStep(1);
    setSteps(7);
  }, [setStep, setSteps]);

  const handlePhone = (phone: string) => {
    setPhone(phone);
  };

  if (showCancel) {
    return null;
  }

  return (
    <>
      <Title>{title}</Title>
      <Text>{text}</Text>

      <div className={'mt-[10.8rem] _mt-[17rem] w-[39rem]'}>
        <PhoneInput
          placeholder={'Telefonnummer'}
          localization={dk}
          country={'dk'}
          enableTerritories={true}
          preferredCountries={['dk', 'gl', 'fo']}
          priority={{ dk: 0, gl: 1, fo: 2 }}
          value={phone}
          onChange={handlePhone}
        />
      </div>

      <div className={'mt-40 mb-20'}>
        <CtaButton isPrimary={true} to={'/personoplysninger'}>
          {ctaLabel}
        </CtaButton>
      </div>
    </>
  );
}
