import Card from "../UI/Card"
import classes from './UserList.module.css'
const UserList = props => {
    return (

        <Card className={classes.users}>

            <ul>
                {
                    props.users.map((user => <li>{user.name} {user.age} </li>))
                }

            </ul>
        </Card>



    )
}

export default UserList