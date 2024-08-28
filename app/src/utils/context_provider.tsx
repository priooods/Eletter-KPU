import React, {createContext} from 'react';

export interface SetupData {
  code: Array<number>;
  setCode: (code: number) => void;
  deleteCode: (code: number) => void;
  deleteAllCode?: () => void;
}
export const Contextdata = createContext<SetupData | undefined>(undefined);
export default function ContextDataProvider({children}: any) {
  const [codes, setCodes] = React.useState<Array<number>>([]);
  const addCode = (code: number) => {
    setCodes([...codes, code]);
  };
  const deletedCode = (code: number) => {
    const newcode = codes.filter((c: number) => c !== code);
    setCodes([...newcode]);
  };
  const deleteAllCode = () => {
    setCodes([]);
  };

  return (
    <Contextdata.Provider
      value={{
        code: codes,
        setCode: addCode,
        deleteCode: deletedCode,
        deleteAllCode: deleteAllCode,
      }}>
      {children}
    </Contextdata.Provider>
  );
}
