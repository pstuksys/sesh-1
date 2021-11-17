import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import React,{useState} from 'react';


const App = () => {
  const [usersLists,setUsersList] = useState([]);
  
  const addUserHandler = (uName,uAge) =>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:uName,age:uAge, id:Math.random().toString()}]
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersLists} />
    </div>
  );
}

export default App;
