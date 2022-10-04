import { useEffect } from "react";
import { useRef, useState } from "react";
import PageContainer from "../components/PageContainer";

const HomePage = () => {
    const [ad, setAd] = useState('')
    const previous = useRef("")

    useEffect(() => {
        previous.current = ad
    }, [ad])

    // useEffect(() => {
    //     console.log('component yarandi')
    //     setAd('aliadsgvfhi')
    //     return () => {
    //         setAd('')
    //         console.log('component silindi, öldü')
    //     }
    // }, [])  // dependency-list bos olanda {component mount} olur


    // useEffect(() => {
    //     console.log('ad update edildi')
    // }, [ad])


    return (
        <>
            <PageContainer>
                <input ref={previous} type="text"
                    value={ad}
                    onChange={({ target }) => {
                        setAd(target.value)
                    }}
                />
                <h1>input hal-hazirda: {ad}</h1>
                <h1>inputun evvelki value-su: {previous.current}</h1>
            </PageContainer>
        </>
    )
}
export default HomePage;