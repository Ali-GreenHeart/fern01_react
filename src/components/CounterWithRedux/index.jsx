import { connect } from "react-redux"
import Button from "../Button"

// middleware 

const CounterWithRedux = ( { counter, dispatch } ) => {
    console.log(counter)
    return (
        <>
            <h1>{counter}</h1>
            <Button
                text="+"
                onClick={() => {
                    dispatch({ type: 'increase' })
                }}
            />

            <Button
                text="-"
                onClick={() => {
                    dispatch({ type: 'decrease' })
                }}
            />

            <Button
                text="sifirla"
                onClick={() => {
                    dispatch({ type: 'reset' })
                    console.log('sifirlandi')
                }}
            />
            <Button
                text="xususi"
                onClick={() => {
                    const eded = 10 //+prompt('ededi daxil et')
                    dispatch({ type: 'special', payload: eded })
                }}
            />

        </>
    )
}
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(CounterWithRedux);