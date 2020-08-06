import React from 'react';
import BackSide from './BackSide';
import FrontSide from './FrontSide';


class FlipCard extends React.Component {
    render() {
        return(
            <div className="mainflip flip-0">
                <div className="image-flip" >
                    <FrontSide/>
                    <BackSide/> 
                </div>
                

            </div>
            
        );
    }
}

export default FlipCard;