import Card from "../UI/Card";
import styles from './Form.module.css'
import Button from '../UI/Button'
import FormInput from "../UI/FormInput";
import { useEffect, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
const AddUser = props => {

    const [formValues, setFormValues] = useState({ firstname: '', lastname: '', email: '', password: '', confirmPassword: '' })
    const [error, setError] = useState({ firstname: '', lastname: '', email: '', password: '', confirmPassword: '' });
    const [select, setSelect] = useState(null)
    const [temp, setTemp] = useState('')
    const pwdReg = /^(?=.*\d)(?=.*[A-Z])(.{8,25})$/;
    const usernameReg = /^[A-Za-z ]+$/;
    const [toggleVisiblity, setToggleVisiblity] = useState(true);
    const [isPasswordMatch, setIsPasswordMatch] = useState(true)
    const isVisible = toggleVisiblity ? 'password' : 'text'
    const onToggle = () => setToggleVisiblity(!toggleVisiblity)

    const changeHandler = (e) => {
        setTemp(e.target.name)
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValues.firstname.length === 0)
            setError(prev => { return { ...prev, 'firstname': 'First name cant be empty' } })

        if (formValues.lastname.length === 0)
            setError(prev => { return { ...prev, 'lastname': 'Last name cant be empty' } })

        if (formValues.password.length === 0)
            setError(prev => { return { ...prev, 'password': 'Password cant be empty' } })

        if (formValues.confirmPassword.length === 0)
            setError(prev => { return { ...prev, 'confirmPassword': 'Confirm-Password cant be empty' } })

        if (formValues.email.length === 0)
            setError(prev => { return { ...prev, 'email': 'Email cant be empty' } })

        if (error.firstname.length !== 0 || error.lastname.length !== 0 || error.confirmPassword.length !== 0 || error.password.length !== 0) {
            return
        }
        if (formValues.firstname.length === 0 || formValues.lastname.length === 0 || formValues.confirmPassword.length === 0 || formValues.password.length === 0) {
            return
        }

        if (formValues.password !== formValues.confirmPassword) {
            setIsPasswordMatch(false)
            return
        }
        else
            setIsPasswordMatch(true)

        props.onAddUser(formValues)

        setFormValues({ firstname: '', lastname: '', email: '', password: '', confirmPassword: '' })



    }


    useEffect(() => {

        switch (temp) {

            case 'firstname':

                if (formValues.firstname.length === 0) {
                    setError({ ...error, [temp]: 'First name cant be empty' })
                    break;
                }
                else if (formValues.firstname.length > 20) {
                    setError({ ...error, [temp]: 'First name cant exceed 20 characters' }); break;
                }

                if ((!usernameReg.test(formValues.firstname))) {
                    setError({ ...error, [temp]: 'First name cant have special characters' }); break;
                }
                setError({ ...error, [temp]: '' }); break;

            case 'lastname':

                if (formValues.lastname.length === 0) {
                    setError({ ...error, [temp]: 'Last name cant be empty' })
                    break;
                }
                else if (formValues.lastname.length > 20) {
                    setError({ ...error, [temp]: 'Last name cant exceed 20 characters' }); break;
                }

                if ((!usernameReg.test(formValues.lastname))) {
                    setError({ ...error, [temp]: 'Last name cant have special characters' }); break;
                }
                setError({ ...error, [temp]: '' }); break;


            case 'email':

                if (!formValues.email.includes('@') || !formValues.email.includes('.com')) {
                    setError({ ...error, [temp]: 'Missing symbols like @ and .com' }); break;
                }
                setError({ ...error, [temp]: '' }); break;


            case 'password':
                if (formValues.password.length === 0) {
                    setError({ ...error, [temp]: 'Password cant be empty' }); break;

                }
                else if (!(pwdReg.test(formValues.password))) {
                    setError({ ...error, [temp]: ' Must include 8 characters including a number and a  symbol' }); break;
                }
                setError({ ...error, [temp]: '' }); break;


            case 'confirmPassword':
                if (formValues.confirmPassword.length === 0) {
                    setError({ ...error, [temp]: 'Password cant be empty' }); break;
                }
                else if (!(pwdReg.test(formValues.confirmPassword))) {
                    setError({ ...error, [temp]: 'Password must include 8 characters including a number and a  symbol' }); break;
                }
                setError({ ...error, [temp]: '' }); break;

        }

    }, [formValues])


    return (
        <Card className={styles.input}>
            <form onSubmit={handleSubmit}>

                <FormInput className={styles.input} onChange={changeHandler} type='text' value={formValues.firstname} name='firstname' placeholder='First Name' />
                {error.firstname.length !== 0 ? <span className={styles.invalid}>{error.firstname}</span> : null}

                <FormInput className={styles.input} onChange={changeHandler} type='text' value={formValues.lastname} name='lastname' placeholder='Last Name' />
                {error.lastname.length !== 0 ? <span className={styles.invalid}>{error.lastname}</span> : null}

                <FormInput className={styles.input} onChange={changeHandler} type='email' value={formValues.email} name='email' placeholder='Email' />
                {error.email.length !== 0 ? <span className={styles.invalid}>{error.email}</span> : null}



                <div className={styles.pswd} >
                    <FormInput className={styles.input} onChange={changeHandler} type={isVisible} value={formValues.password} name='password' placeholder='Password' />

                    <VisibilityIcon className={styles.visiblity} onClick={onToggle} />
                    {error.password.length !== 0 ? <span className={styles.invalid}>{error.password}</span> : null}
                </div>

                <div className={styles.pswd}>
                    <FormInput className={styles.input} onChange={changeHandler} type={isVisible} value={formValues.confirmPassword} name='confirmPassword' placeholder='Confirm Password' />

                    <VisibilityIcon className={styles.visiblity} onClick={onToggle} />
                    {error.confirmPassword.length !== 0 ? <span className={styles.invalid}>{error.confirmPassword}</span> : null}
                </div>


                {!isPasswordMatch && <span className={styles.invalid}>Password didnt match</span>}




                <Button type='submit'>SIgn up</Button>

            </form >
        </Card>

    )
}

export default AddUser