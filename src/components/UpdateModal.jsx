import React, { useState } from "react";
import useStoreTalks from "../store/useStoreTalks";

export default function UpdateModal({
  isOpen,
  onClose,
  title_modal,
  id,
  action,
  context,
}) {
  const { talks, updateTalk } = useStoreTalks((state) => state);

  // Trouver le talk à mettre à jour
  const talkToUpdate = talks.find(talk => talk.id === id);

  const [title, setTitle] = useState(talkToUpdate?.title || '');
  const [subject, setSubject] = useState(talkToUpdate?.subject || '');
  const [duration, setDuration] = useState(talkToUpdate?.duration || '');
  const [author, setAuthor] = useState(talkToUpdate?.author || '');
  const [goal, setGoal] = useState(talkToUpdate?.goal || '');

  const handlesubmit = (e) => {
    e.preventDefault();

    updateTalk({
      id: id,
      title: title,
      subject: subject,
      duration: duration,
      author: author,
      goal: goal,
    });
    
    // Fermer la modal après la mise à jour
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
      <div className="bg-black rounded-2xl shadow-lg max-w-md w-full p-6 relative">
        <h2 className="text-xl font-semibold mb-4">
          {title_modal} {action} {context}
        </h2>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
          />
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration"
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Goal"
          />

          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="m-2">
              <span>Cancel</span>
            </button>
            <button type="submit" className="m-2">
              <span>Update Talk</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
