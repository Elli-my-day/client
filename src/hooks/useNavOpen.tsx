import React, { useContext } from 'react';
import { NavOpenContext } from '@/context/NavOpenProvider';

const useNavOpen = () => {
  const { navOpen, handleNavOpen } = useContext(NavOpenContext);

  return { navOpen, handleNavOpen };
};

export default useNavOpen;
