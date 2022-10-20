import React from 'react';
import Button from '@/base/Button';

interface IProps {
  clickCancel: () => void;
  clickSave: () => void;
}

const ModalFooter = ({ clickCancel, clickSave }: IProps) => {
  return (
    <div className="w-full flex justify-end items-center mt-8">
      <Button variant="text" onClick={clickCancel}>
        Cancel
      </Button>
      <Button onClick={clickSave}>Save Changes</Button>
    </div>
  );
};

export default ModalFooter;
