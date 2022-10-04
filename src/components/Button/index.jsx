import styles from "./Button.module.css";

const Button = ({ isDark, text, onClick }) => {

    return (
        <button
            className={isDark ? styles.darkStyles : styles.lightStyles}
            onClick={onClick}
        >{text}</button>
    )
}

export default Button;