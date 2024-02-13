import { useState } from 'react';

export function Container({name}) {

    const[count, setCount] = useState(0)

    function decrementCount() {
        if(count > 0) {
            setCount(count - 1)
        }

    }

    function incrementCount() {
        setCount(count + 1)
    }

    return (
        <>
            <div style={{border: "solid", borderRadius: "10px", borderColor: "white"}}>
                <h1 style={{margin: "10px"}}>{name}</h1>

                <div>
                    <button onClick={decrementCount}>Downvote</button>
                    <span>{count}</span>
                    <button onClick={incrementCount}>Upvote</button>
                </div>
            </div>
        </>
    )
}
