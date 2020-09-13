import React, { useEffect } from 'react';

/* 배열 랜더링하기 */

const User = React.memo(function User({ user, onRemove, onToggle }) { /* App.js 에서 props로 받아옵니다. */
    const { username, email, id, active } = user;
    useEffect(() => {
        console.log('컴포넌트 나타남')
    }, []);
    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
               onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button> {/* 파라미터를 전달하기 위해 함수 형태로 작성 */}
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {
                users.map(
                    (user) => (
                        <User
                            user={user}
                            key={user.id} /* 고유 값이 없고 데이터가 적을 때에는 key 값으로 map()의 index를 넣을 수 있습니다. */
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    );
}

export default React.memo(UserList);