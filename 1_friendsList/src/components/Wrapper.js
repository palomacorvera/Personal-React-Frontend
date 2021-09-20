import React, {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';

import List from './showFriends/List';
import data from '../data';
import AddFriend from './addFriends/AddFriend';

import style from './Wrapper.module.css';

const Wrapper = () => {
    const [people, setPeople] = useState(data);
    const [visibility, setVisibility] = useState(false);

    const handleDelete = id => {
        const updatedPeople = people.filter(person => person.id !== id);
        setPeople(updatedPeople);
    }

    const showHandler = () => {
        setVisibility(true);
    };
    
    const hideHandler = () => {
        setVisibility(false);
    };

    const handleAdd = (arrayInfo) => {
        const updatedPeople = [
            ...people,
            arrayInfo
        ]
        setPeople(updatedPeople);
        console.log(people)
    }

    return (
        <div className={style.wrapper}>
            {visibility && <AddFriend onClose={hideHandler} onAdd={handleAdd}/>}
            <div className={style.header}>
                <h2 className={style.h2}>{people.length} Friends On My List</h2>
                <FontAwesomeIcon 
                    icon={faPlusSquare} 
                    className={style.icon}
                    onClick={showHandler}
                />
            </div>
            <List 
                people={people} 
                onDelete={handleDelete}
            />
            <div className={style.buttonWrapper}>
                <button 
                    className={style.button}
                    onClick={() => setPeople([])}>
                        Clear All
                </button>
            </div>
        </div>
    )
}

export default Wrapper;