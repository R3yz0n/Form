import Card from "../UI/Card"
import classes from './UserList.module.css'


const UserList = props => {

    return (

        <Card className={classes.users}>


            {props.showList && <ul>
                {
                    props.users.map((user, index) => <li key={index}>
                        <span>Firstname : {user.firstname}</span>
                        <span>Lastname : {user.lastname}</span>
                        <span>Email : {user.email}</span>
                    </li>)
                }


            </ul>}

        </Card>



    )
}

export default UserList