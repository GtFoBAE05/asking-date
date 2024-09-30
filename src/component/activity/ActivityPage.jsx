import ActivityItem from "./ActivityItem.jsx";

const ActivityPage = ({ onYesClick }) => {
    const activityList = [
        {
            "name": "Food Culinary",
            "image": "https://static.fanpage.it/wp-content/uploads/sites/22/2021/06/spaghetti-bolognese.jpg"
        },
        {
            "name": "Coffee date",
            "image": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/4bbf6224-6861-4519-9318-e4bab6f312a9_Go-Biz_20221130_181002.jpeg?auto=format"
        },
        {
            "name": "Picnic",
            "image": "https://afullliving.com/wp-content/uploads/2021/10/Picnic-Date-How-To-Plan-A-Romantic-for-Two-47-1025x1536.jpg"
        },
        {
            "name": "Bar",
            "image": "https://www.asia-bars.com/wp-content/uploads/2019/08/gallery-cocktail-bar.jpg"
        },
    ];

    const handleActivityClick = (activityName) => {
        onYesClick(activityName);
    };

    return (
        <div className={"flex flex-col justify-center items-center gap-8"}>
            <img src={"https://media.tenor.com/W60hq4V-d0sAAAAd/cat-stare.gif"} style={{width:300, height:300}}/>
            <h1>What activity should we do?</h1>
            <div className={"grid grid-cols-4 gap-24"}>
                {
                    activityList.map((activity) => (
                        <ActivityItem
                            key={activity.name}
                            name={activity.name}
                            image={activity.image}
                            onYesClick={handleActivityClick}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default ActivityPage;
