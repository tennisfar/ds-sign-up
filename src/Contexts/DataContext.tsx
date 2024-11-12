import React, { createContext, useContext, useState } from 'react';
import { sitecoreData } from '../SitecoreData.ts';

type DataContextProviderProps = {
  children: React.ReactNode;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
type Data = any;

type DataContext = {
  data: Data;
};

export const DataContext = createContext<DataContext | null>(null);

export default function DataContextProvider({ children }: DataContextProviderProps) {
  const [data] = useState<Data>(sitecoreData);

  return (
    <DataContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataContextProvider');
  }
  return context;
}
