import React from 'react';
import Link from 'next/link';
import FullLogoIcon from '@/assets/icons/logo/logo_name.svg';
import LogoIcon from '@/assets/icons/logo/logo.svg';
import useNavOpen from '@/hooks/useNavOpen';

const Logo = () => {
  const { navOpen } = useNavOpen();

  return (
    <Link href="/">
      <a>
        <div data-testid="logo">{navOpen ? <FullLogoIcon /> : <LogoIcon />}</div>
      </a>
    </Link>
  );
};

export default Logo;
