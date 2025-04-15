import React, { useState } from 'react';
import useStoreTalks from '../store/useStoreTalks';

function UpdateTalk() {
    
    const updateTalk = useStoreTalks((state) => state.updateTalk); 

    return (
        <div>

        </div>
    );
}

export default UpdateTalk;