import React from "react";

const Todos = ({todoslist}) => {
    console.log("child render")
    return (
        <React.Fragment>
            <h2>My Todos</h2>
            {todoslist.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </React.Fragment>
    );
}

export default Todos;