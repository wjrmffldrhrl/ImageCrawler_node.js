import React from 'react';


class FrontSide extends React.Component {
    render() {

        return (
            <div className="frontside">
                <div className="card">
                    <div className="card-body text-center">
                        <h4 className="card-title">{this.props.num}</h4>
                        <p><img className=" img-fluid" src={this.props.imgSrc} alt="card image" /></p>

                        {/* <p className="card-text"></p> */}


                    </div>
                </div>
            </div>
        );
    }
}

export default FrontSide;