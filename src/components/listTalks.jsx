import React, { useState } from 'react';
import useStoreTalks from '../store/useStoreTalks';
import ModalButton from './ModalButton';

function ListTalks() {

    const listTalks = useStoreTalks((state) => state.talks);

    return (
        <div>
            {listTalks.map((talk) => (
                <div key={talk.id} className="m-3 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {talk.title}
                    </h3>
                    <div className="font-normal text-gray-700 dark:text-gray-400">
                        Subject : {talk.subject}{' '}
                        Duration : {talk.duration}{' '}
                        Author : {talk.author}{' '}
                        Goal : {talk.goal}{' '}
                    </div>

                    <ModalButton id={talk.id} action={'Delete'} context={'Talk'}/>
                    <ModalButton id={talk.id} action={'Update'} context={'Talk'}/>
<<<<<<< HEAD
=======
                    
                    <ModalButton id={talk.id} action={'Update'} context={'Talk'}/>
>>>>>>> main
                    
                </div>
            ))}
        </div>
    );
}

export default ListTalks;