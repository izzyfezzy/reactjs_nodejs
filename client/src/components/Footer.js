import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div className="black" style={{ opacity: '0.5', height: "auto", marginTop: "420px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col l3 s12">
                            <h6 className="white-text">AGKOLSHIPS</h6>                        
                                <p className="white-text">Everday is a new day for us and we
                                work really hard to satisfy 
                                our customer everywhere</p>
                        </div>
                        <div className="col l3 s12">
                            <h6 className="white-text">GET IN TOUCH</h6>
                            <p className="white-text">48,Lome Crescent Wuse,Zone 7 Abuja</p>

                            <p className="white-text">+234 90-385-30886 
                            +234 70-623-59535
                            info@agkolchips.com</p>
                        </div>
                        <div className="col l3 s12">
                            <h6 className="white-text">USEFUL LINKS</h6>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">About Us</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Services</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Our Networks</a></li>
                            </ul>
                        </div>
                        <div className=" col l3 s12">
                            <h6 className="white-text">SUBSCRIBE FOR NEWSLETTER</h6>
                            <p className="white-text">Email address</p>
                        </div>                        
                    </div>
                    <hr className="col s12"></hr>                    
                    <p className="white-text">Copyright © 2018 AGKOLCHIPS</p>
                </div>                
            </div>            
        );
    }
}

export default Footer;