import { CtaButton } from '../Cta/CtaButton.tsx';
import { useShowCancelContext } from '../../Contexts/ShowCancelContext.tsx';
import { Title } from '../Title/Title.tsx';
import { useDataContext } from '../../Contexts/DataContext.tsx';

export const CancelSignUp = () => {
  const { showCancel, setShowCancel } = useShowCancelContext();
  const { data } = useDataContext();
  const { title, ctaLabelConfirm, ctaLabelRegret } = data.cancelSignUp;

  if (!showCancel) {
    return null;
  }

  const handleCancel = () => {
    setShowCancel(!showCancel);
  };

  return (
    <>
      <Title>{title}</Title>

      <div className={'mt-30 flex flex-col gap-12'}>
        <CtaButton isPrimary={true} fn={handleCancel}>
          {ctaLabelRegret}
        </CtaButton>

        <CtaButton href={'/'}>{ctaLabelConfirm}</CtaButton>
      </div>
    </>
  );
};
