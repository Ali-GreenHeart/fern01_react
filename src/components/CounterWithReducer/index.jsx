import { useReducer } from "react"
import Button from "../Button"

const counterReducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'increase':
            return ++state
        case 'decrease':
            return --state
        case 'reset':
            return 0;
        case 'special':
            return state + action.payload
    }
}

const CounterWithReducer = () => {
    const [counter, dispatch] = useReducer(counterReducer, 0)

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
export default CounterWithReducer;