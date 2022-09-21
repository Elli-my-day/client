import React from 'react';
import SunnyIcon from '@/assets/icons/diary/sunny.svg';
import CloudyIcon from '@/assets/icons/diary/cloudy.svg';
import RainyIcon from '@/assets/icons/diary/rainy.svg';
import { IDiary } from '@/types/diary';

type IProps = Pick<IDiary, 'status'>;

const Status = ({ status }: IProps) => {
  const Icon = () => {
    switch (status) {
      case 'sunny':
        return <SunnyIcon></SunnyIcon>;
      case 'cloudy':
        return <CloudyIcon></CloudyIcon>;
      case 'rainy':
        return <RainyIcon></RainyIcon>;
      default:
        return <></>;
    }
  };

  return <>{Icon()}</>;
};

export default Status;
