import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

import style from './Item.module.css';

const Item = ({person, onClick}) => {
    return (
        <div className={style.container}>
            <img 
                className={style.pic} 
                src={person.img} 
                alt='img'
            />
            <div className={style.info}>
                <h4>{person.name}</h4>
                <p>{person.age} years</p>
            </div>
            <FontAwesomeIcon 
                icon={faTrash} 
                className={style.icon}
                onClick={() => onClick(person.id)}
            />
        </div>
    )
}

export default Item;