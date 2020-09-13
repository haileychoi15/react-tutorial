import React, { useRef, useState, useMemo, useCallback } from 'react';
import './App.css';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log('지금 접속 중인 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);


  /* nextId 값을 useref 를 사용하여 관리합니다. 변수의 값이 바뀌어도 컴포넌트가 리랜더링 되지 않습니다. */
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id:nextId.current,
      username,
      email,
    }

    setUsers(users => users.concat(user)); /* [...users, user] 동일한 방법 */

/*
    여기서 함수형 업데이트를 하면 users가 콜백으로써 최신 users를 참조 하기 때문에 deps에 users를 안넣어줘도 된다.
*/

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  }, [username, email]);
/*
  여기서 users가 빠지면 onCreate함수는 username과 email이 바뀔 때에만 다시 만들어진다.
*/

  const onRemove = useCallback(id => {
      setUsers(users => users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
      setUsers(users => users.map(
          user => user.id === id ? {...user, active: !user.active} : user
      ));
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
      <>
        <CreateUser
            username={username}
            email={email}
            onCreate={onCreate}
            onChange={onChange}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        <div>활성 사용자 수 : {count}</div>
      </>
  );
}

export default App;
