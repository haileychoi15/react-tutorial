import React, { useState, useRef } from 'react';

function Hello() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;

/*        let nextInputs = Object.assign(inputs);
        nextInputs[name] = value;
        console.log(nextInputs);*/

        const nextInputs = {
            ...inputs,
            [name]: value,
        }

        setInputs(nextInputs);
    }
    const onReset = (e) => {
        setInputs(
            {
                name: '',
                nickname: '',
            }
        );
        nameInput.current.focus();
    }

    return (
        <div>
            <input />
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export  default Hello;