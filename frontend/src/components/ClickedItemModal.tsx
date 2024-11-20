import React from "react";
import CloseIcon from '@mui/icons-material/Close';

interface ClickedItemModalProps {
  item: string | null;
  onClose: () => void;
}

const ClickedItemModal: React.FC<ClickedItemModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-56 lg:w-1/4">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <CloseIcon />
        </button>

        <h3 className="text-lg font-semibold mb-4">Clicked Item</h3>
        <p className="mb-4">{item}</p>
      </div>
    </div>
  );
};

export default ClickedItemModal;