import { create } from 'zustand';
import { combine } from "zustand/middleware";

const useStoreTalks = create(
    combine(
        //inital state
        {
            talks: [],
        },

        (set) => ({

            addTalk: (talk) =>
                set((state) => ({
                   talks: [...state.talks, talk]
                })),

            updateTalk: (updatedTalk) =>
                set((state) => ({
                    talks: state.talks.map((talk) => 
                        talk.id === updatedTalk.id ? updatedTalk : talk
                    )
                })),

            deleteTalk: (id) =>
                set((state) => ({
                    talks: state.talks.filter((talk) => talk.id !== id)
                })),
                
        })));

export default useStoreTalks;