import { CtaFn, CtaHref } from '../Cta/CtaButton.tsx';
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
        <CtaFn fn={handleCancel}>{ctaLabelRegret}</CtaFn>

        <CtaHref layout={'secondary'} href={'/'}>
          {ctaLabelConfirm}
        </CtaHref>
      </div>
    </>
  );
};
