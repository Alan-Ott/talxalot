import React, { useState } from 'react';
import useStoreTalks from '../store/useStoreTalks';

function DeleteTalk() {

    const deleteTalk = useStoreTalks((state) => state.deleteTalk);

    return (
        <div>

        </div>
    );
}

export default DeleteTalk;