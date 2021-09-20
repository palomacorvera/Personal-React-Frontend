import React from 'react';

import Item from './Item';

const List = ({people, onDelete}) => {
    return(
        people.map(person => {
            return (
                <Item 
                    key={person.id} 
                    person={person}
                    onClick={onDelete}
                />
            )
        })
    )
}

export default List;