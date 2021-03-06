import React from "react";

type GreetingsProps = {
    name: string;
    mark?: string;
}

const Greetings: React.FC<GreetingsProps> =({ name, mark = '!'}) => {

    return(
        <div>
            Hello, {name} {mark}!
        </div>
    )
}

export default Greetings;