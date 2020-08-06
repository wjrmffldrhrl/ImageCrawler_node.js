import React from 'react';
import FlipCard from './card/FlipCard';
import styles from '../static/css/main.css';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            imgSrc: "/images/partner.svg",
        };
    }

    render(){
        return(
            <section id="team" className="pb-5">
                <div className="container">
                    <h5 className="section-title h1">image crawler</h5>
                    <div className="row">
                    
                            <FlipCard num={1} imgSrc={this.state.imgSrc}/>
                            <FlipCard num={2} imgSrc={this.state.imgSrc}/>
                            <FlipCard num={3} imgSrc={this.state.imgSrc}/>
                            <FlipCard num={3} imgSrc={this.state.imgSrc}/>
                            <FlipCard num={3} imgSrc={this.state.imgSrc}/>
                            <FlipCard num={3} imgSrc={this.state.imgSrc}/>
                         
                    
                    </div>
                   
                </div>
            </section>
        );
    }
}

export default Main;