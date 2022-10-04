import { NavLink } from "react-router-dom";


const activeStyles = {
    color: 'red',
    backgroundColor: 'green'
}

const NavigationLink = ({ to, pageName, isEnd = false }) => {
    return (
        <NavLink
            end={isEnd}
            style={({ isActive }) => isActive ? activeStyles : undefined}
            to={to}>    
            {pageName}
        </NavLink>
    )
}

export default NavigationLink;