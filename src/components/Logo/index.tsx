import React from 'react';
import Image from 'next/image';
import FullLogoIcon from '@/assets/icons/logo_name.svg';
import LogoIcon from '@/assets/icons/logo.svg';
import useNavOpen from '@/hooks/useNavOpen';

const Logo = () => {
  const { navOpen } = useNavOpen();

  return <div>{navOpen ? <FullLogoIcon /> : <LogoIcon />}</div>;
};

export default Logo;
