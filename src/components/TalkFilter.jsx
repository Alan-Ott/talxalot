import React from 'react';
import useStoreTalks from '../store/useStoreTalks';

function TalkFilter() {
    const sortBy = useStoreTalks((state) => state.sortBy);
    const sortOrder = useStoreTalks((state) => state.sortOrder);
    const setSortBy = useStoreTalks((state) => state.setSortBy);
    const setSortOrder = useStoreTalks((state) => state.setSortOrder);

    return (
        <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
                <label htmlFor="sortBy" className="text-sm font-medium">
                    Trier par :
                </label>
                <select
                    id="sortBy"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-gray-700 text-white rounded-lg px-3 py-2 text-sm"
                >
                    <option value="title">Titre</option>
                    <option value="duration">Durée</option>
                    <option value="author">Auteur</option>
                </select>
            </div>

            <div className="flex items-center gap-2">
                <label htmlFor="sortOrder" className="text-sm font-medium">
                    Ordre :
                </label>
                <select
                    id="sortOrder"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="bg-gray-700 text-white rounded-lg px-3 py-2 text-sm"
                >
                    <option value="asc">Croissant</option>
                    <option value="desc">Décroissant</option>
                </select>
            </div>
        </div>
    );
}

export default TalkFilter; 