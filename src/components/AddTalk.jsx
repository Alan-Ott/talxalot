import React, { useState } from 'react';
import useStoreTalks from '../store/useStoreTalks';

function AddTalk() {

    const addTalk = useStoreTalks((state) => state.addTalk); 

    return (
        <div>
            
        </div>
    );
}

export default AddTalk;