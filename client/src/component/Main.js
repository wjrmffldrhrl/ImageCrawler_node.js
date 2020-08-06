import React from 'react';
import FlipCard from './FlipCard';
import styles from '../static/css/main.css';

class Main extends React.Component {
    render(){
        return(
            <section id="team" className="pb-5">
                <div className="container">
                    <h5 className="section-title h1">image crawler</h5>
                    <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="image-flip" >
                            

                                <FlipCard/>
                                
                            
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Main;