import React, { useMemo } from 'react';
import useStoreTalks from '../store/useStoreTalks';
import DeleteButton from './DeleteButton.jsx';
import UpdateButton from "./UpdateButton.jsx";

function ListTalks() {
    const talks = useStoreTalks((state) => state.talks);
    const sortBy = useStoreTalks((state) => state.sortBy);
    const sortOrder = useStoreTalks((state) => state.sortOrder);
    const toggleTalkCompleted = useStoreTalks((state) => state.toggleTalkCompleted);

    const sortedTalks = useMemo(() => {
        return [...talks].sort((a, b) => {
            if (sortBy === 'duration') {
                return sortOrder === 'asc'
                    ? Number(a.duration) - Number(b.duration)
                    : Number(b.duration) - Number(a.duration);
            }
            
            const aValue = String(a[sortBy]).toLowerCase();
            const bValue = String(b[sortBy]).toLowerCase();
            return sortOrder === 'asc'
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
        });
    }, [talks, sortBy, sortOrder]);

    return (
        <div>
            {sortedTalks.map((talk) => (
                <div key={talk.id} className={`m-3 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${talk.completed ? 'opacity-60' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {talk.title}
                        </h3>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={talk.completed}
                                onChange={() => toggleTalkCompleted(talk.id)}
                                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-500 dark:text-gray-400">Terminé</span>
                        </label>
                    </div>
                    <div className="font-normal text-gray-700 dark:text-gray-400">
                        <p>Sujet : {talk.subject}</p>
                        <p>Durée : {talk.duration} minutes</p>
                        <p>Auteur : {talk.author}</p>
                        <p>Objectif : {talk.goal}</p>
                    </div>

                    <div className="flex space-x-2">
                        <DeleteButton id={talk.id} action={'Delete'} context={'Talk'}/>
                        <UpdateButton id={talk.id} action={'Update'} context={'Talk'}/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListTalks;