import React from 'react';
import BackSide from './BackSide';
import FrontSide from './FrontSide';


class FlipCard extends React.Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="mainflip flip-0">
                    <div className="image-flip" >

                        <FrontSide num={this.props.num} imgSrc={this.props.imgSrc} />
                        <BackSide imgSrc={this.props.imgSrc} />
                    </div>



                </div>
            </div>
        );
    }
}

export default FlipCard;