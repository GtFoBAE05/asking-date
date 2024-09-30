import { useEffect, useState } from "react";
import AskingDate from "../../component/askingDate/AskingDate.jsx";
import ConfirmationDate from "../../component/confirmationDate/ConfirmationDate.jsx";
import AskingTime from "../../component/AskingTime/AskingTime.jsx";
import ActivityPage from "../../component/activity/ActivityPage.jsx";
import AskingExcited from "../../component/askingExcited/AskingExcited.jsx";
import SeeYouOnDate from "../../component/seeYouOnDate/SeeYouOnDate.jsx";

const MainPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedTime, setSelectedTime] = useState();
    const [selectedActivity, setSelectedActivity] = useState("");

    useEffect(() => {
    }, [currentStep]);

    const handleAskingDateClick = () => {
        setCurrentStep(1);
    };

    const handleConfirmationDateClick = () => {
        setCurrentStep(2);
    };

    const handleAskingTimeClick = (time) => {
        console.log(time)
        setSelectedTime(time)
        setCurrentStep(3);
    };

    const handleAskingActivityClick = (activityName) => {
        setSelectedActivity(activityName);
        setCurrentStep(4);
    };

    const handleAskingExcitedClick = () => {
        setCurrentStep(5)
    }

    function formatDateTime(dateTimeString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
        const date = new Date(dateTimeString);

        return date.toLocaleString('en-EN', options).replace(',', '');
    }

    switch (currentStep) {
        case 0:
            return <AskingDate onYesClick={handleAskingDateClick} />;
        case 1:
            return <ConfirmationDate onYesClick={handleConfirmationDateClick} />;
        case 2:
            return <AskingTime onYesClick={handleAskingTimeClick} />;
        case 3:
            return <ActivityPage onYesClick={handleAskingActivityClick} />;
        case 4:
            return <AskingExcited onYesClick={handleAskingExcitedClick}/>
        case 5:
            return <SeeYouOnDate time={formatDateTime(selectedTime)}/>
        default:
            return null;
    }
};

export default MainPage;
