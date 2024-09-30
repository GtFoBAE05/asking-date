import React from "react";

const ActivityItem = ({ name, image, onYesClick }) => {
    const handleClick = () => {
        onYesClick(name);
    };

    return (
        <div className="flex flex-col items-center justify-center cursor-pointer" onClick={handleClick}>
            <img
                src={image}
                style={{ width: 200, height: 200, borderRadius: 100 }}
            />
            <p>{name}</p>
        </div>
    );
};

export default ActivityItem;
