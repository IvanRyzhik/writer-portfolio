import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

type ArticleModalProps = {
  isOpen: boolean;
  url: string;
  onRequestClose: () => void;
};

const ArticleModal: React.FC<ArticleModalProps> = ({ isOpen, url, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
    >
      <iframe src={url} className="w-full h-[80vh] p-3" />
      <button
        onClick={onRequestClose}
        className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        aria-label="Close modal"
      >
        ✕
      </button>
    </Modal>
  );
};

export default ArticleModal;

