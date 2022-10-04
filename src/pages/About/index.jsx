import aboutPicture from "../../img/ali.jpg";
import PageContainer from "../components/PageContainer";

const AboutPage = () => {
    return (
        <>
            <PageContainer>
                <h1>I'm about page</h1>
                <img src={aboutPicture} alt="" />
            </PageContainer>
        </>
    )
}
export default AboutPage;