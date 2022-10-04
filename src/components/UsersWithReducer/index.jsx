import axios from "axios"
import { useEffect, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid';

const ACTIONS = {
    get_all_users: 'get_all_users',
    delete_user: 'delete_user',
    add_user: 'add_user',
    edit_user: 'edit_user'
}
// crud

const userReducer = (state, { type, payload }) => {
    // console.log(state, action)
    switch (type) {
        case ACTIONS.get_all_users:
            return [...payload]
        case ACTIONS.delete_user:
            return state.filter((elem) => elem.id !== payload)
        case ACTIONS.add_user:
            return [...state, payload]
        case ACTIONS.edit_user:
            return [...state].map((user) => {
                if (user.id === payload.id) {
                    return { ...user, name: payload.newName }
                } else {
                    return user;
                }
            })
        default:
            return state;
    }
}


const UsersWithReducer = () => {
    const [users, dispatch] = useReducer(userReducer, [])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                dispatch({ type: ACTIONS.get_all_users, payload: resp.data.map((elem) => ({ id: elem.id, name: elem.name, username: elem.username })) })
            })
    }, [])
    useEffect(() => {
        console.log(users)
    }, [users])

    return (
        <>
            {
                users.length === 0 ?
                    <div>--bosdur--</div>
                    :
                    users.map((elem) => {
                        return <div style={{ display: 'flex', alignItems: 'center' }} key={elem.id}>
                            <p>{elem.username} // {elem.name}</p>
                            <button onClick={() => {
                                const newName = prompt('teze ad ne olsun')
                                dispatch({ type: ACTIONS.edit_user, payload: { id: elem.id, newName } })
                            }}>c</button>
                            <button onClick={() => {
                                dispatch({ type: ACTIONS.delete_user, payload: elem.id })
                            }}>x</button>
                        </div>
                    })
            }
            <button onClick={() => {
                const name = prompt('adini yaz')
                const username = prompt('usernamei yaz')
                dispatch({ type: ACTIONS.add_user, payload: { name, id: uuidv4(), username } })
            }}>add user</button>
        </>
    )
}
export default UsersWithReducer;