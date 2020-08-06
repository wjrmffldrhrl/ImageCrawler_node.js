import React from 'react';


class Backside extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };

        this.checkedHandle = this.checkedHandle.bind(this);

    }

    checkedHandle() {
        alert(this.props.imgSrc);
        this.setState(state => ({
            isChecked: !state.isChecked,
        }));

        console.log(this.state.isChecked);
    }



    render() {
        return (
            <div className="backside" onClick={this.checkedHandle}>
                <div className="card">
                    <div className="card-body text-center mt-4">
                        <h4 className="card-title">Click to check</h4>
                        <img src={this.props.imgSrc} />

                        {this.state.isChecked && <div>checked!</div>}


                    </div>
                </div>
            </div>
        );
    }
}

export default Backside;