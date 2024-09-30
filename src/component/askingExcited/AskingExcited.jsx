import {Slider} from "@mui/material";
import styles from "../../pages/main/main.module.css";
import {useState} from "react";

const AskingExcited = ({onYesClick}) => {

    const [excitedValue, setExcitedValue] = useState(50)

    const handleChange = (event, newValue) => {
        setExcitedValue(newValue);
    };

    return (
        <div className={"flex flex-col"}>
            <img
                src={
                    excitedValue <= 30
                        ? "https://media.tenor.com/AQl5nwtdmKYAAAAM/sad-cat.gif"
                        : excitedValue > 30 && excitedValue <= 90
                            ? "https://media.tenor.com/7TRVO3SkQhAAAAAd/cat-cats.gif"
                            : "https://gifdb.com/images/high/happy-cat-peach-excited-spinning-q5mnqrfbhrgdrdwl.gif"
                }
                alt="Cat"
            />

            <h1>Rate how excited u?</h1>
            <Slider
                size="medium"
                aria-label="Temperature"
                defaultValue={50}
                min={10}
                max={100}
                onChange={handleChange}
                color="secondary"
            />
            <button className={`${styles.fade} m-9`} onClick={onYesClick}>
                {excitedValue <=30 ? ":((((" : excitedValue>30 && excitedValue<=90 ? "-_-" : "YEAYYYY :))))"}
            </button>
        </div>
    )

}

export default AskingExcited