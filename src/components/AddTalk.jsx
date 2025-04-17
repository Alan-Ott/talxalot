import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useStoreTalks from '../store/useStoreTalks';

function AddTalk() {

    const addTalk = useStoreTalks((state) => state.addTalk);

    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [duration, setDuration] = useState('');
    const [author, setAuthor] = useState('');
    const [goal, setGoal] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();

        addTalk({
            id: uuidv4(),
            title: title,
            subject: subject,
            duration: duration,
            author: author,
            goal: goal

        });

        setTitle('');
        setSubject('');
        setDuration(0);
        setAuthor('');
        setGoal('');
    };

    return (
        <div>
            <form action="">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title'
                />
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder='Subject'
                />
                <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder='Duration'
                />
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder='Author'
                />
                <input
                    type="text"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder='Goal'
                />

                <button disabled={false} onClick={handlesubmit}>Submit Talk</button>
            </form>
        </div>
    );
}

export default AddTalk;