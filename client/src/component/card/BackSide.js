import React from 'react';


class Backside extends React.Component {


    download(){
        alert("whow!");
    }

    render() {
        return(
            <div className="backside">
                <div className="card">
                    <div className="card-body text-center mt-4">
                        <h4 className="card-title">Original Size</h4>
                        <img src="/images/partner.svg"/>
                        {/* <p className="card-text"></p> */}
                        <button onClick={this.download}>Download</button>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Backside;