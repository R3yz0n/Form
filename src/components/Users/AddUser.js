import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import { useState } from "react";
;
const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const [isInvalidAge, setIsInvalidAge] = useState(false);
    const [isInvalidUsername, setIsInvalidUsername] = useState(false);
    const invalidUsername = <p className={styles.invalid}> Invalid username..</p>;
    const invalidAge = <p className={styles.invalid}> Invalid age..</p>;
    // instead of invalid age i can use variable to make it dynamic

    const usernameChangeHandler = (e) => setUsername(e.target.value);
    const ageChangedHandler = (e) => setAge(e.target.value);


    const addUserHandler = (event) => {
        event.preventDefault();

        if (username.trim().length === 0 || /\d/.test(username)) {
            setIsInvalidUsername(true)
            return
        }
        if (+age <= 0 || age.trim().length === 0) {
            setIsInvalidAge(true)
            return
        }
        console.log(age, username);
        props.onAddUser(username, age);
        //         alert(`Username  :  ${username};
        //  Age  :  ${age}`);

        setIsInvalidAge(false);
        setIsInvalidUsername(false);
        setUsername('');
        setAge('');

    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>

                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={usernameChangeHandler} value={username} autoFocus={true}
                    style={isInvalidUsername ? { color: 'red', textDecoration: 'b' } : null} />
                {isInvalidUsername && invalidUsername}

                <label htmlFor="age">Age</label>
                <input type="number" id="age" onChange={ageChangedHandler} value={age} />
                {isInvalidAge && invalidAge}

                <Button type='submit'>
                    Submit
                </Button>

            </form >
        </Card>

    )
}

export default AddUser