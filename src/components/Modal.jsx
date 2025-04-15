import React from 'react'
import useStoreTalks from '../store/useStoreTalks';

export default function Modal({ isOpen, onClose, title, id, action, context }) {
  const deleteTalk = useStoreTalks((state) => state.deleteTalk);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
      <div className="bg-black rounded-2xl shadow-lg max-w-md w-full p-6 relative">
        <h2 className="text-xl font-semibold mb-4">{title} {action} {context} </h2>
        <button
          onClick={onClose}
          className='m-2'
        >
          <span>Cancel</span>
        </button>
        <button
          onClick={() => (deleteTalk(id), console.log('Deleted talk : ', id), onClose)}
          className='m-2'
        >
          <span>Confirm {context}</span>
        </button>
      </div>
    </div>
  );
}