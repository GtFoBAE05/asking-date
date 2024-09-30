import styles from "../../pages/main/main.module.css";
import { useState } from "react";

const AskingTime = ({ onYesClick }) => {
    const [time, setTime] = useState("");

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    const handleClick = () => {
        onYesClick(time);
    };

    return (
        <>
            <div className="flex flex-col items-center">
                <img src={"https://media.giphy.com/media/tB7F9m4LpvgJy/giphy.gif"}/>
                <h1 className="m-9">When are you free?</h1>
                <input
                    type="datetime-local"
                    id="datetime"
                    className="m-9"
                    value={time}
                    onChange={handleChange}
                />
                <button className={`${styles.fade} m-9`} onClick={handleClick}>
                    Yeayyy, let's choose what activity we should do
                </button>
            </div>
        </>
    );
};

export default AskingTime;
