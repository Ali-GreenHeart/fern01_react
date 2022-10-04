import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";


const PageContainer = ({ children, className }) => {
    return (
        <>
            <Header/>
            <Navigation />
            <main className={className}>
                {children}
            </main>
            <Footer />
        </>
    )
}
export default PageContainer;