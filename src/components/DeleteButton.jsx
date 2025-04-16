import React, { useState } from 'react';
import DeleteModal from './DeleteModal.jsx';

function DeleteButton({ id, action, context }) {

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="p-6">
            <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
                <span>{action} {context}</span>
            </button>

            <DeleteModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                title='Are you sure you want to'
                id={id}
                action={action}
                context={context}
            >
            </DeleteModal>
        </div>
    );
};

export default DeleteButton;

