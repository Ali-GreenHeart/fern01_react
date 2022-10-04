import { useState } from 'react';
import { users } from '../../data/user';
import styles from './index.module.css'


const UserList = () => {
    const [userId, setUserId] = useState(0)

    return (
        <>
            <div className={styles.pageContainer}>
                {
                    users.map(({ id, username, img, job }) => {
                        return (
                            <div
                                style={{
                                    pointerEvents: userId !== 0 && 'none'
                                }}
                                onClick={() => {
                                    setUserId(id)
                                }}
                                className={styles.card} key={id}>
                                <img src={img} alt={`${username}'s picture`} />
                                <h1>{username}</h1>
                                <p>{job}</p>
                            </div>
                        )
                    })
                }
            </div>
            {
                userId !== 0 && <div className={styles.modal}>
                    {
                        (() => {
                            let { info, img } = users.find((elem) => elem.id === userId)
                            return (
                                <>
                                    <p>{info}</p>
                                    <img src={img} alt="" />
                                </>
                            )
                        })()
                    }
                    <button onClick={() => {
                        setUserId(0)
                    }} style={{ float: 'right' }}>x</button>
                </div>
            }
        </>
    )
}
export default UserList;