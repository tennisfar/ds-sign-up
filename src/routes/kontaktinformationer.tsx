import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { CtaSubmitForm } from '../Components/Cta/CtaButton.tsx';
import { useDataContext } from '../Contexts/DataContext.tsx';
import { Title } from '../Components/Title/Title.tsx';
import { Text } from '../Components/Text/Text.tsx';
import '../Components/FormElements/PhoneInput/style.less';
import dk from '../Components/FormElements/PhoneInput/da.json';
import { FieldApi, useForm } from '@tanstack/react-form';

export const Route = createFileRoute('/kontaktinformationer')({
  component: ContactInfo,
});

function ContactInfo() {
  const { setStep, setSteps } = useStepContext();
  const { showCancel } = useShowCancelContext();
  const { data } = useDataContext();
  const { title, text, ctaLabel } = data.kontaktinformationer;
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setStep(1);
    setSteps(7);
  }, [setStep, setSteps]);

  interface FieldValue {
    email: string;
    phoneNumber: string;
  }

  function FieldInfo({ field }: { field: FieldApi<FieldValue, 'email'> }) {
    return (
      <>
        {field.state.meta.isTouched && field.state.meta.errors.length ? (
          <div className={'text-12 text-[#FF0006] mt-4 -mb-2'}>{field.state.meta.errors[0]}</div>
        ) : null}
      </>
    );
  }

  const form = useForm({
    defaultValues: {
      email: '',
      phoneNumber: '',
    },
    validators: {
      onMount: ({ value }) => {
        // Used to validate the form on mount, disabling the submit button.
        return validateEmail(value.email);
      },
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.error('value: ', value);
      void navigate({ to: '/personoplysninger' });
    },
  });

  const handlePhone = (phone: string) => {
    setPhone(phone);
  };

  const validateEmail = (email: string) => {
    const isValid =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
        email
      );

    if (!isValid) return 'Indtast venligst gyldig e-mail';
  };

  if (showCancel) {
    return null;
  }

  return (
    <>
      <Title>{title}</Title>
      <Text>{text}</Text>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
        className={'mt-40 flex flex-col gap-16 w-[39rem]'}
      >
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => {
              if (!value) return 'Indtast venligst e-mail';
              return validateEmail(value);
            },
          }}
          children={(field) => (
            <div className={`relative`}>
              <input
                className={`relative h-52 w-full text-16 border-solid border-[0.1rem] border-[#838B9B] rounded-[0.6rem] pl-14 ${field.state.value !== '' ? 'pt-14 after:absolute after:z-[1] after:pointer-events-none after:content-["E-mail"]' : ''}`}
                placeholder={'E-mail'}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                type={'email'}
              />
              <div
                className={`${field.state.value !== '' ? 'visible' : 'invisible'} absolute text-12 text-[#838B9B] top-6 left-16`}
              >
                E-mail
              </div>
              <FieldInfo field={field} />
            </div>
          )}
        />

        <div className={''}>
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

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <div className={'mt-24 mb-20 mx-auto'}>
              <CtaSubmitForm disabled={!canSubmit || isSubmitting}>{ctaLabel}</CtaSubmitForm>
            </div>
          )}
        />
      </form>
    </>
  );
}
