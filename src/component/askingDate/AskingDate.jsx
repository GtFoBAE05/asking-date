import React, {useState} from "react";

const AskingDate = ({onYesClick}) => {
    const [buttonYesWidthSize, setButtonYesWidthSize] = useState(64);
    const [buttonYesHeightSize, setButtonYesHeightSize] = useState(48);
    const [noCount, setNoCount] = useState(0);

    function setNoButtonHandler() {
        setButtonYesWidthSize(buttonYesWidthSize * 1.25)
        setButtonYesHeightSize(buttonYesHeightSize * 1.25)
        setNoCount(noCount + 1)
    }

    const getNoButtonText = () => {
        const phrases = [
            "Nooo, but why? 😢",
            "Are you super-duper sure? 🥺",
            "What if I ask with my cutest puppy eyes? 🐾✨",
            "Pretty please with cosan coffee! ☕💖",
            "And a tiramisu cake just for you! 🍰🍫",
            "Pwease, my little sweetie aguu! 🥰💕",
            "But I'm just a little heartbroken! 💔😔",
            "I might just melt away... 😭🍂",
            "Yep, I’m a goner... 😇💔",
            "Pweaseeeeee! 💖🌈",
            "I'm so sad right now... 😭💖",
            "PRETTY PWEASEEEEE!!! 🌟✨",
            "Noooooo, my heart! 💔😢",
            "This is the last no, pwease? 😢💖",
        ];


        return phrases[Math.min(noCount, phrases.length - 1)];
    };



    return (
        <>

            <div className="flex justify-center items-center ">
                <img
                    src={noCount === 13 ? "https://media.tenor.com/LRDMe1QpqFYAAAAC/cat-cute.gif" : "https://gifdb.com/images/high/animated-cute-baby-bear-question-mark-dm4sq6mc4wdj7wmc.gif"}
                    alt="Cute Baby Bear"/>
            </div>


            <h1 className="text-4xl font-bold text-center m-9">Would you like to go out with me for a date?</h1>

            <div className="flex flex-row justify-center items-center gap-16 ">
                <button className={`bg-green-500`}
                        style={{width: buttonYesWidthSize, height: buttonYesHeightSize}}
                        onClick={onYesClick}
                >{noCount === 13 ? "There is no answer, only yes :P" : "Yes"}

                </button>
                {noCount !== 13 && (
                    <button className="bg-rose-600" onClick={setNoButtonHandler}>
                        {noCount === 0 ? "No" : getNoButtonText()}
                    </button>
                )}


            </div>
        </>
    );
}

export default AskingDate