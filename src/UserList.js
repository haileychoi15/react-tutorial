import React from 'react';

/* 배열 랜더링하기 */

function User({ user }) { /* App.js 에서 props로 받아옵니다. */
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList({ users }) {
    return (
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id}></User>)
                    /* 고유 값이 없고 데이터가 적을 때에는 key 값으로 map()의 index를 넣을 수 있습니다. */
                )
            }
        </div>
    );
}

export default UserList;