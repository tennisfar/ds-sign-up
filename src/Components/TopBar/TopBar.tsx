import BackIcon from '../../assets/back.svg';
import CloseIcon from '../../assets/close.svg';
import { useStepContext } from '../../assets/Contexts/StepContext.tsx';
import { useShowCancelContext } from '../../assets/Contexts/ShowCancelContext.tsx';

export const TopBar = () => {
  const { step, steps } = useStepContext();
  const { showCancel, setShowCancel } = useShowCancelContext();

  const handleCancel = () => {
    setShowCancel(!showCancel);
  };

  return (
    <div className={'relative max-w-[68rem] mt-70 mx-auto flex items-center h-40 mb-12 text-[1.4rem] justify-between'}>
      {step && (
        <div className={'flex gap-4 absolute left-0 cursor-pointer hover:underline'} onClick={handleCancel}>
          {BackIcon && <img src={BackIcon} alt={'Luk'} />}
          Tilbage
        </div>
      )}

      {step && !showCancel && (
        <div className={'absolute left-0 text-center w-full'}>
          Trin {step} af {steps}
        </div>
      )}

      {!showCancel && (
        <div className={'flex gap-4 absolute right-0 cursor-pointer hover:underline'} onClick={handleCancel}>
          Afbryd
          {CloseIcon && <img src={CloseIcon} alt={'Luk'} />}
        </div>
      )}
    </div>
  );
};
