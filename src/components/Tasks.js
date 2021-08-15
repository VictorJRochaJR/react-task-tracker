const tasks = []

export const Tasks = () => {
    return (
        <>
    {tasks.map((task) =>(<h3>{task.text}</h3>))}
        </>
    )
}
