import React from 'react';
import image1 from "../../image/image1.jpg"
import image2 from "../../image/image2.jpg"
import image7 from "../../image/image7.jpg"
import './carouse.css'

const Carousel = () => {
    return (
        <div>
            <div className="container-fluid">
                 <div className="row">
                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    
                        <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>
                    
                        <div className="carousel-inner carosel-content" role="listbox">
                                <div className="item active">
                                    <img src={image1}/>   
                                </div>

                                <div className="item">
                                    <img src={image2}/>
                                </div> 

                                <div className="item">
                                    <img src={image7}/>
                                </div>
                        </div>
                    
                        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
