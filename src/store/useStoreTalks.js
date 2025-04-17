import { create } from 'zustand';
import { combine } from "zustand/middleware";

const sortTalks = (talks, sortBy, sortOrder) => {
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
};

const useStoreTalks = create(
    combine(
        //inital state
        {
            talks: [],
            sortBy: 'title', // 'title', 'duration', 'author'
            sortOrder: 'asc', // 'asc', 'desc'
        },

        (set, get) => ({
            addTalk: (talk) =>
                set((state) => ({
                   talks: [...state.talks, { ...talk, completed: false }]
                })),

            updateTalk: (updatedTalk) =>
                set((state) => ({
                    talks: state.talks.map((talk) => 
                        talk.id === updatedTalk.id ? { ...updatedTalk, completed: talk.completed } : talk
                    )
                })),

            deleteTalk: (id) =>
                set((state) => ({
                    talks: state.talks.filter((talk) => talk.id !== id)
                })),

            toggleTalkCompleted: (id) =>
                set((state) => ({
                    talks: state.talks.map((talk) =>
                        talk.id === id ? { ...talk, completed: !talk.completed } : talk
                    )
                })),

            setSortBy: (sortBy) =>
                set({ sortBy }),

            setSortOrder: (sortOrder) =>
                set({ sortOrder }),

            getSortedTalks: () => {
                const state = get();
                return sortTalks(state.talks, state.sortBy, state.sortOrder);
            }
        })));

export default useStoreTalks;