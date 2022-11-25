import { useState } from 'react';
import Form from './components/Users/Form';
import UserList from './components/Users/UserList';
import Button from './components/UI/Button';

function App() {
  const [userList, setUserList] = useState([]);
  const [showList, setShowList] = useState(false)

  const addUserHandler = (receivedUserInfo) => {

    setUserList([...userList, receivedUserInfo]);
    console.log(userList);


  }
  const toggleUserList = () => setShowList(!showList);




  return (
    <div>

      <Form onAddUser={addUserHandler} />
      <Button onClick={toggleUserList}>Show User's List</Button>
      <UserList users={userList} showList={showList} />

    </div>
  );
}

export default App;
