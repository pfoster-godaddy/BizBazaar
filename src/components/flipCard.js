import Flippy, { FrontSide, BackSide } from 'react-flippy';

const FlipCard = () => {

    return (
        <Flippy
        flipOnHover={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
    >
        <FrontSide style={{ backgroundColor: '#41669d'}} >
        RICK <br />
        </FrontSide>
        <BackSide style={{ backgroundColor: '#175852'}}>
        ROCKS
        </BackSide>
    </Flippy>
    )
};

export default FlipCard;