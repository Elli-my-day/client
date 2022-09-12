import React, { createContext, useCallback, useState } from 'react';

interface IProps {
  children: React.ReactNode;
}

interface IValue {
  navOpen: boolean;
  handleNavOpen: () => void;
}

export const NavOpenContext = createContext<IValue>({} as IValue);

const NavOpenProvider = ({ children }: IProps) => {
  const [navOpen, setNavOpen] = useState(true);

  const handleNavOpen = useCallback(() => {
    setNavOpen((prev) => !prev);
  }, []);

  return (
    <NavOpenContext.Provider
      value={{
        navOpen,
        handleNavOpen,
      }}
    >
      {children}
    </NavOpenContext.Provider>
  );
};

export default NavOpenProvider;
