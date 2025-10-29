import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  children?: ReactNode; 
  onClose: () => void;
  footer?: ReactNode; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, children, footer, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="relative bg-white rounded-2xl shadow-lg max-w-lg w-full mx-4 p-6 z-10">
        {/* Header */}
        {title && (
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        )}

        {/* Content */}
        <div className="mb-4">{children}</div>

        {/* Footer */}
        {footer && <div className="pt-3 border-t">{footer}</div>}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
