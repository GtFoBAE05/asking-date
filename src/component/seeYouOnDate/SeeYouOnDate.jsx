const SeeYouOnDate = (props) => {

    return (
        <div className={"flex flex-col justify-center items-center gap-8"}>

            <img className={"w-4/6"} src={"https://media.tenor.com/images/dfb0585fe7646b48dcb69666d88324a3/tenor.gif"}/>

            <h1>Seee you soon on {props.time}</h1>

        </div>
    )

}

export default SeeYouOnDate