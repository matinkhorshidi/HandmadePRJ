import React, {useState, useEffect} from 'react';
import Slider from "../components/Slider/Slider";
import Rotation from "../components/Rotation/Rotation";

const Main = (props) => {
    // const [count, setCount] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);

    return (
        <>
            <Slider/>
            <Rotation/>
        </>
    );
};

export default Main;