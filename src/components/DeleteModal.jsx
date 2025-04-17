import React from 'react'
import useStoreTalks from '../store/useStoreTalks';
import UpdateTalk from './UpdateTalk'

export default function DeleteModal({ isOpen, onClose, title, id, action, context }) {
  const deleteTalk = useStoreTalks((state) => state.deleteTalk);

  if (!isOpen) return null;

  const handleDelete = () => {
    deleteTalk(id);
    console.log('Deleted : ', id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
      <div className="bg-black rounded-2xl shadow-lg max-w-md w-full p-6 relative">
        <h2 className="text-xl font-semibold mb-4">{title} {action} {context}</h2>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            <span>Cancel</span>
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            <span>Confirm {action}</span>
          </button>
        </div>
      </div>
    </div>
  );
};