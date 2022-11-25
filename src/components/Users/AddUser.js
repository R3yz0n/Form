import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');


    const usernameChangeHandler = (e) => setUsername(e.target.value);
    const ageChangedHandler = (e) => setAge(e.target.value);


    const addUserHandler = (event) => {
        event.preventDefault();

        if (username.trim().length === 0 || /\d/.test(username)) {
            return
        }
        if (+age <= 0 || age.trim().length === 0) {

            return
        }
        console.log(age, username);
        props.onAddUser(username, age);

        setUsername('');
        setAge('');

    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>

                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={usernameChangeHandler} value={username} />


                <label htmlFor="age">Age</label>
                <input type="number" id="age" onChange={ageChangedHandler} value={age} />

                <Button type='submit'>Submit</Button>

            </form >
        </Card>

    )
}

export default AddUser