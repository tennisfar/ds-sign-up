import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import PhoneInput, { CountryData } from 'react-phone-input-2';
import { useStepContext } from '../Contexts/StepContext.tsx';
import { useShowCancelContext } from '../Contexts/ShowCancelContext.tsx';
import { CtaSubmitForm } from '../Components/Cta/CtaButton.tsx';
import { useDataContext } from '../Contexts/DataContext.tsx';
import { Title } from '../Components/Title/Title.tsx';
import { Text } from '../Components/Text/Text.tsx';
import '../Components/FormElements/PhoneInput/style.less';
import dk from '../Components/FormElements/PhoneInput/da.json';
import { FieldApi, useForm, ValidationError } from '@tanstack/react-form';

export const Route = createFileRoute('/kontaktinformationer')({
  component: ContactInfo,
});

function ContactInfo() {
  const { setStep, setSteps } = useStepContext();
  const { showCancel } = useShowCancelContext();
  const { data } = useDataContext();
  const { title, text, ctaLabel } = data.kontaktinformationer;
  let phoneNumberData: { countryCode?: string; dialCode?: string; value?: string } = {};
  const countryCodeInitValue = '45';
  const navigate = useNavigate();

  useEffect(() => {
    setStep(1);
    setSteps(7);
  }, [setStep, setSteps]);

  const getErrorOutput = (errorMessage: ValidationError) => (
    <div className={'text-12 text-[#FF0006] mt-4 -mb-2'}>{errorMessage}</div>
  );

  interface FieldValue {
    email: string;
    phoneNumber: string;
    values: { email: string; phoneNumber: string };
  }

  function EmailFieldInfo({ field }: { field: FieldApi<FieldValue, 'email'> }) {
    return (
      <>
        {field.state.meta.isTouched && field.state.meta.errors.length
          ? getErrorOutput(field.state.meta.errors[0])
          : null}
      </>
    );
  }

  function PhoneNumberFieldInfo({ field }: { field: FieldApi<FieldValue, 'phoneNumber'> }) {
    return (
      <>
        {field.state.meta.isTouched && field.state.meta.errors.length
          ? getErrorOutput(field.state.meta.errors[0])
          : null}
      </>
    );
  }

  const form = useForm({
    defaultValues: {
      email: '',
      phoneNumber: countryCodeInitValue,
      values: { email: '', phoneNumber: '' },
    },
    onSubmit: async ({ value }) => {
      // Do something with form data.
      console.error('value: ', value);
      void navigate({ to: '/personoplysninger' });
    },
  });

  const validateEmail = (email: string) => {
    // Validation from https://emailregex.com/
    const isValid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
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
                className={`relative h-52 w-full text-16 border-solid border-[0.1rem] border-[#838B9B] rounded-[0.6rem] pl-14 ${field.state.value !== '' ? 'pt-14' : ''}`}
                placeholder={'E-mail'}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                type={'email'}
                required
              />
              <div
                className={`${field.state.value !== '' ? 'visible' : 'invisible'} absolute text-12 text-[#838B9B] top-6 left-16`}
              >
                E-mail
              </div>
              <EmailFieldInfo field={field} />
            </div>
          )}
        />

        <form.Field
          name="phoneNumber"
          validators={{
            onChange: ({ value }) => {
              const { countryCode, dialCode = '' } = phoneNumberData;
              const phoneNumberDigits = value.length - dialCode.length;

              if (!value) {
                return 'Indtast venligst telefonnummer';
              }

              switch (countryCode) {
                case 'dk':
                  if (phoneNumberDigits !== 8) {
                    return 'Indtast venligst gyldig telefonnummer';
                  }
                  break;
                case 'gl':
                  if (phoneNumberDigits !== 6) {
                    return 'Indtast venligst gyldig telefonnummer';
                  }
                  break;
                case 'fo':
                  if (phoneNumberDigits !== 6) {
                    return 'Indtast venligst gyldig telefonnummer';
                  }
                  break;
                default:
                  return null;
              }
            },
          }}
          children={(field) => (
            <div className={`relative [&>*:first-child:!bg-[red] has-[.visible]:[&>*]!bg-[green]`}>
              <PhoneInput
                inputClass={`${phoneNumberData.value !== '' ? 'pt-14' : ''}`}
                countryCodeEditable={true}
                placeholder={'Telefonnummer'}
                localization={dk}
                country={'dk'}
                enableTerritories={true}
                preferredCountries={['dk', 'gl', 'fo']}
                masks={{ dk: '.. .. .. ..', gl: '... ...', fo: '... ...' }}
                priority={{ dk: 0, gl: 1, fo: 2 }}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(value, data: CountryData) => {
                  phoneNumberData = { ...data, value };
                  field.handleChange(value);
                }}
              />
              <div
                className={`${phoneNumberData.value !== '' ? 'visible' : 'invisible'} absolute text-12 text-[#838B9B] top-6 left-[7.4rem]`}
              >
                Telefonnummer
              </div>
              <PhoneNumberFieldInfo field={field} />
            </div>
          )}
        />

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting, state.values]}
          children={([canSubmit, isSubmitting, values]) => {
            const isDisabled = !!(
              !canSubmit ||
              isSubmitting ||
              typeof values !== 'object' ||
              values.email.length === 0 ||
              values.phoneNumber.length === countryCodeInitValue.length
            );

            return (
              <div className={'mt-24 mb-20 mx-auto'}>
                <CtaSubmitForm disabled={isDisabled}>{ctaLabel}</CtaSubmitForm>
              </div>
            );
          }}
        />
      </form>
    </>
  );
}
