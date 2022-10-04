import { useContext } from "react";
import { Link } from "react-router-dom";
import { NameContext } from "../../../context/NameContextComponent";
import duman from "../../../img/duman.jpg"

const Header = () => {
    const value = useContext(NameContext)
    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50
        }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 style={{ color: 'red' }}>Logo</h1>
            </Link>
            <img style={{
                width: 50,
                height: 50,
                borderRadius: '50%'
            }} src={duman} alt="" />
            <h1>{value.name} {value.age}</h1>
        </header>
    )
}
export default Header;