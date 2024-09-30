import styles from "../../pages/main/main.module.css";
import React from "react";

const ConfirmationDate = ({onYesClick}) => {
    return (
        <>
            <img src="https://i.giphy.com/W1hd3uXRIbddu.webp" alt="Cute Image"/>
            <h1>UYAYYYYYYY</h1>
            <button className={styles.fade} onClick={onYesClick}>Lets choose where we should go.
            </button>
        </>
    )
}

export default ConfirmationDate