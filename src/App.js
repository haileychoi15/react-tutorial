import React, { useRef, useState } from 'react';
import './App.css';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  /* nextId 값을 useref 를 사용하여 관리합니다. 변수의 값이 바뀌어도 컴포넌트가 리랜더링 되지 않습니다. */
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id:nextId.current,
      username,
      email,
    }

    setUsers(users.concat(user)); /* [...users, user] */

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  }

  return (
      <>
        <CreateUser
            username={username}
            email={email}
            onCreate={onCreate}
            onChange={onChange}>
        </CreateUser>
        <UserList users={users} />
      </>
  );
}

export default App;
