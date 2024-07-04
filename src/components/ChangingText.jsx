import { useState, useEffect } from "react";

export default function ChangingText() {
    const textArray = ['applications', 'pages', 'components'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % textArray.length);
        }, 2000); 

        return () => clearInterval(intervalId);
    }, [textArray.length]);


    return <h2 id="changing-text" className="lg:text-6xl md:text-5xl sm:text-5xl  py-1 lg:py-3">{textArray[currentIndex]}</h2>
}