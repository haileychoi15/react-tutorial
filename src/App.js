import React, { useState, useReducer, useMemo, useCallback, createContext} from 'react';
import produce from 'immer';
import './App.scss';
import Button from "./components/Button";
/*import UserList from "./UserList";
import CreateUser from "./CreateUser";*/

window.produce = produce; /* 개발자도구에서 produce 사용하기 */

function countActiveUsers(users) {
  console.log('지금 접속 중인 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
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
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user);
      })
/*      return {
        users: state.users.concat(action.user)
      };*/
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
/*      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };*/
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      })
/*      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };*/
    default:
      throw new Error('Unhandled action');
  }
}

// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = createContext(null);

/*function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
      <UserDispatch.Provider value={dispatch}>
        <CreateUser />
        <UserList users={users} />
        <div>활성 사용자 수 : {count}</div>
      </UserDispatch.Provider>
  );
}*/

function App() {
  return (
      <div className="App">
        <div className="buttons">
          <Button>Button</Button>
        </div>
      </div>
  );
}

export default App;
