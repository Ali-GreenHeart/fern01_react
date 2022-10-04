import notFoundPicture from "../../img/wombat.png";
import PageContainer from "../components/PageContainer";

const NotFound = () => {
    return (
        <>
            <PageContainer className="">
                <h1>Not Found</h1>
                <img style={{ width: 300 }} src={notFoundPicture} alt="" />
            </PageContainer>
        </>
    )
}
export default NotFound;