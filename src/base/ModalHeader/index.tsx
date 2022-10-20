import React from 'react';
import IconButton from '@/base/IconButton';
import { IoMdClose } from 'react-icons/io';

interface IProps {
  title: string;
  clickClose: () => void;
}

const ModalHeader = ({ title, clickClose }: IProps) => {
  return (
    <div className="w-full flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <IconButton onClick={clickClose}>
        <IoMdClose size="16"></IoMdClose>
      </IconButton>
    </div>
  );
};

export default ModalHeader;
