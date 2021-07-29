import React from 'react';
import image4 from "../../image/image4.jpg"
import image5 from "../../image/image5.jpg"
import image6 from "../../image/image6.jpg"
import './pizza.css'

const PizzaTypes = () => {
    return (
        <div>
            <div className="container pizza-types">
                <div className="row">
                    <h3 className="text-center">Pizza Types</h3> 

                    <div className="col-md-3">
                        <div className="thumbnail">
                            <img src={image4} alt="pepperoni"/>
                            <div className="caption">
                                <h3>Pepperoni Pizza</h3>
                                <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque nam aspernatur dignissimos architecto aperiam, cum assumenda similique animi vero ea beatae. Dolores, sint. Voluptatum assumenda incidunt accusantium! Blanditiis, nisi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="thumbnail">
                                <img src={image5} alt="cheese"/>
                            <div className="caption">
                                <h3>Cheese Pizza</h3>
                                <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque nam aspernatur dignissimos architecto aperiam, cum assumenda similique animi vero ea beatae. Dolores, sint. Voluptatum assumenda incidunt accusantium! Blanditiis, nisi.
                                </p>
                            </div>
                        </div>
                    
                    </div>
                    <div className="col-md-3">
                        <div className="thumbnail">
                                <img src={image6} alt="bossu"/>
                            <div className="caption">
                                <h3>Bossu Pizza</h3>
                                <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque nam aspernatur dignissimos architecto aperiam, cum assumenda similique animi vero ea beatae. Dolores, sint. Voluptatum assumenda incidunt accusantium! Blanditiis, nisi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="thumbnail">
                                <img src={image5} alt="Pizza"/>
                            <div className="caption">
                                <h3>St.Louis Pizza</h3>
                                <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque nam aspernatur dignissimos architecto aperiam, cum assumenda similique animi vero ea beatae. Dolores, sint. Voluptatum assumenda incidunt accusantium! Blanditiis, nisi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PizzaTypes;
