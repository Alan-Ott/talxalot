import React, { useState } from 'react';
import useStoreTalks from '../store/useStoreTalks';

function UpdateTalk() {
    
    const listTalks = useStoreTalks((state) => state.talks);

            const [title, setTitle] = useState(listTalks.title);
            const [subject, setSubject] = useState(listTalks.subject);
            const [duration, setDuration] = useState(listTalks.duration);
            const [author, setAuthor] = useState(listTalks.author);
            const [goal, setGoal] = useState(listTalks.goal);

            const handlesubmit = (e) => {
            e.preventDefault();

            UpdateTalk({
            id: listTalks.id,
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
    console.log(listTalks, "update")
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

export default UpdateTalk;