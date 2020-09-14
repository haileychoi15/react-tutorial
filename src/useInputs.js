import React, {useState, useReducer, useCallback, useRef} from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]:action.value
            }
        case 'RESET':
            return {
                username: '',
                email: ''
            }
        default:
            throw new Error('Unhandled action');
    }
}

function useInputs(initialForm) {

    const [form, dispatch] = useReducer(reducer, initialForm);
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE',
            name,
            value
        });
    }, []);

    const reset = useCallback(() => {
        dispatch({
            type: 'RESET'
        });
    }, []);

  return [form, onChange, reset]; /* 객체 형태로 내보내도 된다. */
}

export default useInputs;