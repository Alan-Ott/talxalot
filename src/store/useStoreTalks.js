import { create } from 'zustand';
import { combine } from "zustand/middleware";

const useStoreTalks = create(
    combine(
        //inital state
        {
            id: 0,
            title: '',
            subject: '',
            duration: 0,
            author: '',
            goal: '',
        },

        (set) => ({

            addTalk: (talk) =>
                set((state) => ({
                    id: state.id, 
                    title: state.title, 
                    subject: state.subject,
                    duration: state.duration,
                    author: state.author,
                    goal: state.goal,
                })),

            updateTalk: (talk) =>
                set((state) => ({

                })),

            deleteTalk: (talk) =>
                set((state) => ({
                    talks: state.talks.filter((talk) => talk.id !== id)
                })),

            listTalks: (talk) =>
                set((state) => ({

                })),

        })));

export default useStoreTalks;