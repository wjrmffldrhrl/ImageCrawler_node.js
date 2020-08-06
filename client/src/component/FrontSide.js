import React from 'react';


class FrontSide extends React.Component {
    render() {
        return(
            <div className="frontside">
                <div className="card">
                    <div className="card-body text-center">
                        <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"/></p>
                        <h4 className="card-title">Front side</h4>
                        <p className="card-text">This is basic card with image on top, title, description and button.</p>
                        <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontSide;