import React from 'react';
import db from './data.js';
import { useState } from 'react';
import BigCard from './components/bigCard.js';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import 'react-awesome-slider/dist/styles.css';


const Store = (props) => {
    const id = props.match.params.id;
    const data = db.getTenAboveAndBelow(id);
    //set the first half of the array to the end of the array
    const firstHalf = data.slice(0, Math.floor(data.length / 2));
    const secondHalf = data.slice(Math.floor(data.length / 2));
    const newData = secondHalf.concat(firstHalf);
    const [currentIndex, setCurrentIndex] = useState((Math.floor(data.length / 2) + 1));
    return (
        <div>
            <AwesomeSlider
                bullets={false}
            >
                {newData.map((data, index) => (
                    <div key={index} style={{width: "100%", height: '100%'}}>
                        <BigCard index={index} />
                    </div>
                ))}
            </AwesomeSlider>
        </div>
    )
}

export default Store;