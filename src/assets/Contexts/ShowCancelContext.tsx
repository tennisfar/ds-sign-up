import React, { createContext, useContext, useState } from 'react';

type ShowCancelContextProviderProps = {
  children: React.ReactNode;
};

type ShowCancel = boolean;

type ShowCancelContext = {
  showCancel: ShowCancel;
  setShowCancel: React.Dispatch<React.SetStateAction<ShowCancel>>;
};

export const ShowCancelContext = createContext<ShowCancelContext | null>(null);

export default function ShowCancelContextProvider({ children }: ShowCancelContextProviderProps) {
  const [showCancel, setShowCancel] = useState<ShowCancel>(false);

  return (
    <ShowCancelContext.Provider
      value={{
        showCancel,
        setShowCancel,
      }}
    >
      {children}
    </ShowCancelContext.Provider>
  );
}

export function useShowCancelContext() {
  const context = useContext(ShowCancelContext);
  if (!context) {
    throw new Error('useCancelContext must be used within a CancelContextProvider');
  }
  return context;
}
