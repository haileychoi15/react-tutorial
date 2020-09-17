import React, {useEffect, useContext, useCallback} from 'react';
import { UserDispatch } from "../UserApp";

/* 배열 랜더링하기 */

const User = React.memo(function User({ user }) { /* App.js 에서 props로 받아옵니다. */
    const { username, email, id, active } = user;
    const dispatch = useContext(UserDispatch);

    useEffect(() => {
        console.log('컴포넌트 나타남')
    }, []);

    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
               onClick={() => dispatch({type: 'TOGGLE_USER', id})}
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => dispatch({type: 'REMOVE_USER', id})}>삭제</button> {/* 파라미터를 전달하기 위해 함수 형태로 작성 */}
        </div>
    );
});

function UserList({ users }) {
    return (
        <div>
            {
                users.map(
                    (user) => (
                        <User
                            user={user}
                            key={user.id} /* 고유 값이 없고 데이터가 적을 때에는 key 값으로 map()의 index를 넣을 수 있습니다. */
                        />
                    )
                )
            }
        </div>
    );
}

export default React.memo(UserList);