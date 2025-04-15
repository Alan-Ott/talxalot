import React, { useState } from 'react';
import useStoreTalks from '../store/useStoreTalks';

function ListTalks() {

    const listTalks = useStoreTalks((state) => state.listTalks); 

    return (
        <div>

        </div>
    );
}

export default ListTalks;