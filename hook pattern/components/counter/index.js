import React, { useEffect, useState } from "react";
import Count from "./count";
import WindowWidth from "./windowWidth";




function useCounter() {
    const [count , setCount] = useState(0);

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return { count , increment , decrement }
}

function useWindowWidth() {
    const [width, setWidth ] = useState(0);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    })

    return width
}

export default function Counter() {
    const counter = useCounter();
    const width = useWindowWidth();
    
    return (
        <div className="App">
            <Count
                count={counter.count} 
                increment={counter.increment}
                decrement={counter.decrement}
            />
            <hr />
            
            <WindowWidth width={width} />
        </div>
    )
}