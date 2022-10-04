import React, { useState } from 'react';
import Button from '../Button';
import styles from "./Counter.module.css"


function Counter() {
    const [counter, setCounter] = useState(0)
    const [isDark, setIsDark] = useState(false)

    return (
        <div style={{
            backgroundColor: isDark ? "black" : "white",
        }}>
            <button
                className={styles.btn}
                onClick={() => {
                    setIsDark(!isDark)
                }}
            >
                toggle mode
            </button>

            <h1 style={{
                color: isDark ? "white" : "black"
            }}>{counter}</h1>

            <Button
                // isDark={isDark}
                text="+"
                onClick={() => {
                    setCounter(counter + 1)
                }}
            />

            <Button
                // isDark={isDark}
                text="-"
                onClick={() => {
                    setCounter(counter - 1)
                }}
            />

            <Button
                text="sifirla"
                // isDark={isDark}
                onClick={() => {
                    setCounter(0)
                    console.log('sifirlandi')
                }}
            />

            <Button
                // isDark={isDark}
                text="console-a cixart"
                onClick={() => {
                    console.log(counter)
                }}
            />
        </div>
    );
}


export default Counter;
