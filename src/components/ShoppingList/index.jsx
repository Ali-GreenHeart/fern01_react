import { useEffect } from 'react';
import { useState } from 'react';
import styles from './index.module.css'

const fromBackend = () => ({ alma: 23,  mango: 120, lemon: 0,armud: 45, })

const ShoppingItem = ({ value, property }) => {
    switch (property) {
        case 'alma':
            return <p>{property} 🍎 - {value} </p>
        case 'armud':
            return <p>{property} 🍐 - {value} </p>
        case "lemon":
            return <p>{property} 🍋 - {value} </p>
        case 'mango':
            return <p>{property} 🥭 - {value} </p>
    }
}

const ShoppingList = () => {
    const [say, setSay] = useState("")
    const [mehsul, setMehsul] = useState("alma")
    const [items, setItems] = useState({})

    useEffect(() => {
        setItems(fromBackend())
    }, [])


    return (
        <>
            <h1 className={styles.pageHeading}>Shopping List</h1>
            <select value={mehsul} onChange={({ target }) => {
                setMehsul(target.value)
            }}>
                <option value="alma">Alma</option>
                <option value="armud">Armud</option>
                <option value="mango">Mango</option>
                <option value="lemon">Lemon</option>
            </select>
            <input
                value={say}
                onChange={({ target }) => {
                    setSay(+target.value)
                }}
                type="number" />
            <button
                onClick={() => {
                    let kohneValue = items[mehsul] || 0
                    setItems((previousItems) => ({ ...previousItems, [mehsul]: say + kohneValue }))
                }}
            >click me</button>
            <h4>Alinan Mehsullar</h4>
            {
                Object.entries(items).map(([property, value]) => <ShoppingItem key={property} value={value} property={property} />)
            }
        </>
    )
}
export default ShoppingList;