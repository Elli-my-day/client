import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#__next');

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  requestClose: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
}

const Modal = ({ children, isOpen, requestClose }: IProps) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: { zIndex: 1000 },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={requestClose}
      style={customStyles}
      contentLabel="Modal"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
