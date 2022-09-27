import React from 'react';
import FullLogoIcon from '@/assets/icons/logo/logo_name.svg';
import LogoIcon from '@/assets/icons/logo/logo.svg';
import useNavOpen from '@/hooks/useNavOpen';

const Logo = () => {
  const { navOpen } = useNavOpen();

  return <div data-testid="logo">{navOpen ? <FullLogoIcon /> : <LogoIcon />}</div>;
};

export default Logo;
