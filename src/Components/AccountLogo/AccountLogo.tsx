type AccountLogoProps = {
  isDlo?: boolean;
};

export const AccountLogo = ({ isDlo }: AccountLogoProps) => {
  return (
    <div
      className={`${isDlo ? 'bg-[#c50005]' : 'bg-[#003e99]'} mx-auto text-white rounded-[0.6rem] flex h-[2.6rem] justify-center items-center px-8 py-4 text-[1.2rem] font-bold uppercase`}
    >
      {isDlo ? 'Rød' : 'Blå'} Konto
    </div>
  );
};
