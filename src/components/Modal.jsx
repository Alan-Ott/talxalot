import React from 'react'
import useStoreTalks from '../store/useStoreTalks';
import UpdateTalk from './UpdateTalk'

export default function Modal({ isOpen, onClose, title, id, action, context }) {
  const deleteTalk = useStoreTalks((state) => state.deleteTalk);
  const updateTalk = useStoreTalks((state) => state.updateTalk);

  if (!isOpen) return null;

  const handleConfirm = () => {

    switch (action) {
      case 'Delete':
        return deleteTalk(id),
          console.log(action, ' ', context, ' : ', id);

      case 'Update':
        return console.log(action, ' ', context, ' : ', id);
        //updateTalk(id),

      default:
        return console.log('Action Failed');
    }

    onClose;
  };

  const child = () => {
    if (action == 'Update') {
      return <UpdateTalk/>
    } else {

    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
      <div className="bg-black rounded-2xl shadow-lg max-w-md w-full p-6 relative">
        <h2 className="text-xl font-semibold mb-4">{title} {action} {context}</h2>
        <div>{child}</div>
        <button
          onClick={onClose}
          className='m-2'
        >
          <span>Cancel</span>
        </button>
        <button
          onClick={handleConfirm}
          className='m-2'
        >
          <span>Confirm {action}</span>
        </button>
      </div>
    </div>
  );
};