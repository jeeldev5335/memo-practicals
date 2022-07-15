import React, { memo } from "react";

const TodosMemo = ({todolist}) => {
    console.log("child called");

    return (
        <React.Fragment>
            <h2>My Todos</h2>
            {todolist.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </React.Fragment>
    );
}

export default memo(TodosMemo);