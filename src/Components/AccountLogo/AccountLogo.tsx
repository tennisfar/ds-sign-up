import { useDataContext } from '../../Contexts/DataContext.tsx';

export const AccountLogo = () => {
  const { data } = useDataContext();
  const { context } = data;

  return (
    <div
      className={`${context === 'dlo' ? 'bg-[#c50005]' : 'bg-[#003e99]'} mx-auto text-white rounded-[0.6rem] flex h-[2.6rem] justify-center items-center px-8 py-4 text-[1.2rem] font-bold uppercase mb-24`}
    >
      {context === 'dlo' ? 'Rød' : 'Blå'} Konto
    </div>
  );
};
