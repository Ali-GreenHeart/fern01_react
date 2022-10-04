import NavigationLink from "./NavigationLink";


const Navigation = () => {
    return (
        <nav>
            <NavigationLink to="/" pageName="Home" isEnd />
            <NavigationLink to="/about" pageName="About" />
            <NavigationLink to="/contact" pageName="Contact" />
        </nav>
    )
}
export default Navigation;