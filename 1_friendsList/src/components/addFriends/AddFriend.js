import React, {useState} from 'react';

import Modal from './Modal';
import Input from './Input';

import style from './AddFriend.module.css';

const AddFriend = ({onClose, onAdd}) => {
    const [imgInput, setImgInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [ageInput, setAgeInput] = useState();

    const [valid, setValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleImgChange = (event) => {
        setImgInput(event.target.value);
    }

    const handleNameChange = (event) => {
        setNameInput(event.target.value);
    }

    const handleAgeChange = (event) => {
        setAgeInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(imgInput.trim().length === 0) {
            setValid(false);
            setErrorMessage("Image Url Can´t Be Empty");
            return;
        }
        if (nameInput.trim().length === 0) {
            setValid(false);
            setErrorMessage("Name Must Have At Least One Character");
            return;
        }
        if (ageInput < 1) {
            setValid(false);
            setErrorMessage("Age Must Be Over 1");
            return;
        }

        const arrayInfo = {id: Math.random(), img: imgInput, name: nameInput, age: ageInput};
        onAdd(arrayInfo);

        setImgInput('');
        setNameInput('');
        setAgeInput('');
        setValid(true);

        onClose();
    }

    return(
        <Modal onClose={onClose}>
            <h3 className={style.h3}>Add A New Friend </h3>
            <form className={style.container} onSubmit={handleSubmit}>
                <Input 
                    id={"img"}
                    type={"text"}
                    value={imgInput}
                    placeholder={"Image Url"}
                    className={style.input}
                    onChange={handleImgChange}
                />
                <Input 
                    id={"name"}
                    type={"text"}
                    value={nameInput}
                    placeholder={"Name"}
                    className={style.input}
                    onChange={handleNameChange}
                />
                <Input 
                    id={"age"}
                    type={"number"}
                    value={ageInput}
                    placeholder={"Age"}
                    className={style.input}
                    onChange={handleAgeChange}
                />
                {!valid && <p className={style.error}>{errorMessage}</p>}
                <button 
                    type="submit"
                    className={style.button}
                    >Submit
                </button>
            </form>
        </Modal>
    )
}

export default AddFriend;