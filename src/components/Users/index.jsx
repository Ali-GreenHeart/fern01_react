import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import styles from './users.module.css'

const url = 'https://jsonplaceholder.typicode.com/users'


const User = ({ name, username }) => {
    return (
        <div className={styles.container}>
            <h1>{name}</h1>
            <p>{username}</p>
        </div>
    )
}

const getUsers = async (callback) => {
    const { data } = await axios.get(url)
    const _users = data.map(({ id, name, username }) => ({ id, name, username }))
    callback(_users)
}

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        setTimeout(() => {
            getUsers(setUsers)
        }, 3000)
    }, [])

    return (
        <div className={styles.pageContainer}>
            {
                users.length === 0
                    ?
                    <Loading />
                    :
                    users.map(({ id, name, username }) => <User key={id} name={name} username={username} />)
            }
        </div>
    )
}

export default Users;