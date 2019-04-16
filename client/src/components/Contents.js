import React, { Component } from 'react';
import './Contents.css';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import PersonIcon from 'mdi-react/PersonIcon';
import LocalShippingIcon from 'mdi-react/LocalShippingIcon';
import StarIcon from 'mdi-react/StarIcon';
import StarHalfIcon from 'mdi-react/StarHalfIcon';
import axios from 'axios';
import {
  fruits, transport, transportation, vegetable, plane, time, trucking, bgImage, airport, 
  courierService, worker, truckin, bkImage7, tapCleaning
} from '../foto';

class Contents extends Component {
  state={
    fname: '',
    lname: '',
    email: '',
    msg: '',
    fnameError: '',
    lnameError: '',
    emailError: '',
    msgError: ''
  };

  handleFnameChange = event => {
    this.setState({ fname: event.target.value }, () => { this.validateFname();
    });
  };

  handleLnameChange = event => {
    this.setState({ lname: event.target.value }, () => { this.validateLname();
    });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value }, () => { this.validateEmail();
    });
  };

  handleMsgChange = event => {
    this.setState({ msg: event.target.value }, () => { this.validateMsg();
    });
  };

  validateFname = () => {
    const { fname } = this.state;
    this.setState({
      fnameError: fname.length > 3 ? null : 'First Name must be greater than 3 characters'
    });
  }

  validateLname = () => {
    const { lname } = this.state;
    this.setState({
      lnameError: lname.length > 3 ? null : 'Last Name must be greater than 3 characters'
    });
  }

  validateEmail = () => {
    const { email } = this.state;    
    this.setState({
      emailError: email.length > 3 && this.state.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? null : 'Invalid email'
    });
  }

  validateMsg = () => {
    const { msg } = this.state;
    this.setState({
      msgError: msg.length > 3 ? null : 'Message must be greater than 3 characters'
    });
  }

  handleSubmit = event => {
    event.preventDefault(); 

    const {fname, lname, email, msg} = this.state;

    if({ fname, lname, email, msg}) {     

      const user = {
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        msg: this.state.msg
      };   
  
      axios.post('/api/email', {user})
      .then(res => {
          console.log(res);
          console.log(res.data.user);
      }).then(() => alert('Message sent.')); 
   
      this.setState({
            fname: '',
            lname: '',
            email: '',
            msg: '',
            fnameError: "",
            lnameError: "",
            emailError: "",
            msgError: ""
      });
    };

  };

  render() {
    return(
      <div>
        <div className="top-div">
          <div id="carouselCaptions" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselCaptions" data-slide-to="1"></li>
              <li data-target="#carouselCaptions" data-slide-to="2"></li>
              <li data-target="#carouselCaptions" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={tapCleaning} className="d-block w-100 tapCleaning" alt="Cleaning" style={{backgroundSize: 'cover'}} />                       
              </div>
              <div className="carousel-item">
                <img src={fruits} className="d-block w-100 fruits" alt="fruits" />                       
              </div>
              <div className="carousel-item">
                <img src={transport} className="d-block w-100 transport" alt="transport"/>                        
              </div>
              <div className="carousel-item">
                <img src={transportation} className="d-block w-100 transportation" alt="transportation" />                        
              </div>
            </div>
          </div>
          <div className="slide-shadow "> </div>
          <div className="inner-content text-center">
            <h4>DELIVERY UNLIMITED</h4>
            <h1>WE SPECIALIZE IN MEETING YOUR NEEDS</h1>
            <button type="button" className="p-2 mt-5 button text-white" href="#services">OUR SERVICES</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 top-second-row">          
            <img src={vegetable} alt="vegetable" className="second-row-img" />
            <div className="second-row-shadow"></div>
            <div className="centered text-center">
              <h4>GROCERIES</h4>
              <p>We know you are very busy, that is why we are here for you. 
                Send us your list of groceries and we'll help you pick them up.</p>
            </div>
          </div>
          <div className="col-md-4 top-second-row">          
            <img src={plane} alt="plane" className="second-row-img" />
            <div className="second-row-shadow"></div>
            <div className="centered text-center">
              <h4>COURIER SERVICES</h4>
              <p>Just give us the address and we can send or deliver your errands</p>
            </div>
          </div>
          <div className="col-md-4 top-second-row">          
            <img src={time} alt="time" className="second-row-img" />
            <div className="second-row-shadow"></div>
            <div className="centered text-center">
              <h4>TIMELY DELIVERY</h4>
              <p> We try our best to give you quality experience and timely delivery of your goods.</p>
            </div>
          </div>
        </div>
        <div className="row" id="abtUs">
          <div className="col-md-6 top-third-row">
            <img src={trucking} alt="trucking" className="third-row-img" />
            <div className='third-row-shadow'> </div>
          </div>
          <div className="col-md-6 top-third-row">
            <div className="jumbotron abt mb-0 pl-5 ">
              <h2>ABOUT US</h2>
              <p>We are agkolchips errands. we are here to run your errands efficiently, differently,
                reliably and fast. Over 114 dedicated employees, working in the heart of Abuja and Lagos,
                deliver operational excellence to provide viable answers to your most challenging errands.</p>
              <p>Our prepared errand-runners are dedicated to delivering quality services to you.
                Our handymen services are on-time for home repairs, plumbering, carpentering, Dstv installation,
                Air conditioner repairs & maintenance or whatever you can dream up.</p>
            </div>           
          </div>
        </div>
        <div className="top-fourth-row">
          <img src={bgImage} alt="background" className="fourth-row-img" />
          <div className="fourth-row-shadow"></div>
          <div className="fourth-row-content">
            <div className="row">
              <div className="col-md-4 pl-5 fourth-row-content2">
                <h5>WE ARE THE BEST</h5>
                <h4>ERRAND COMPANY</h4>
                <p>Over the years we have been able to meet the needs of our customers in africa and beyond. 
                  We have increased our customer base based on the efficient and the effectiveness of our dedicated employees.
                  Our services over the years is summed up in the chart. </p>
              </div>
              <div className="col-md-8 p-5">
                <div className="card-deck">
                  <div className="card bg-secondary ">
                    <div className="card-body text-white text-center">
                      <h2 className="card-text"><TrendingUpIcon size="60" /></h2>
                      <h5 className="card-text">70%</h5>
                      <h6 className="card-text">PROFIT GROWTH</h6>
                    </div>                  
                  </div>
                  <div className="card bg-secondary ">
                    <div className="card-body text-white text-center">
                      <h2 className="card-text"><PersonIcon size="60" /></h2>
                      <h5 className="card-text">85%</h5>
                      <h6 className="card-text">SATISFIED CUSTOMER</h6>
                    </div>                  
                  </div>
                  <div className="card bg-secondary ">
                    <div className="card-body text-white text-center">
                      <h2 className="card-text"><LocalShippingIcon size="60" /></h2>
                      <h5 className="card-text">90%</h5>
                      <h6 className="card-text">TRANSPORT DONE</h6>
                    </div>                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-fifth-row " id="services">
          <div id="carouselSlide" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inn">
              <div className="carousel-item active">
                <img src={tapCleaning} className="d-block w-100 tapCleaning" alt="cleaning" />                       
              </div>
              <div className="carousel-item">
                <img src={fruits} className="d-block w-100 fruits" alt="fruits" />                       
              </div>
              <div className="carousel-item">
                <img src={transport} className="d-block w-100 transport" alt="transport"/>                        
              </div>
              <div className="carousel-item">
                <img src={transportation} className="d-block w-100 transportation" alt="transportation" />                        
              </div>
            </div>
            <div className="fifth-row-shadow "> </div> 
          </div>
          <div className="container text-center">
            <div className=" text-center services">
              <h3>SERVICES</h3>
              <p>We give you quality service that will make you come back again.</p>
            </div>
            <div className="row container justify-content-center text-center fifth-row-content ">
              <div className=" col-md-4 ">
                <div className="card mb-2 p-0 serve-card" style={{height: '22rem'}}>
                  <img src={airport} className="card-img-top" alt="airport" />
                  <div className="card-body">
                    <h5 className="card-title">AIRPORT PICK UP</h5>
                    <h6 className="card-text">Our ever able and reliable drivers are on ground any day, any time to take you or pick you up at the airport</h6>
                  </div>              
                </div>
              </div>
              <div className=" col-md-4">
                <div className="card mb-2 p-0 serve-card"  style={{height: '22rem'}}>
                  <img src={courierService} className="card-img-top" alt="courierService"  />
                  <div className="card-body">
                    <h5 className="card-title">COURIER SERVICE</h5>
                    <h6 className="card-text">We can pick & deliver your errands: parcel, flowers cakes, gifts.</h6>
                  </div>
                </div>
              </div>  
              <div className=" col-md-4">
                <div className="card  mb-3 p-0 serve-card" style={{height: '22rem'}}>
                  <img src={worker} className="card-img-top" alt="worker" />
                  <div className="card-body">
                    <h5 className="card-title">GENERAL CLEANING</h5>
                    <h6 className="card-text">Our experienced staff for home, office ,
                        commercial and industrial professional cleaning service at an affordable price</h6>
                  </div>
                </div>
              </div>  
              <div className=" col-md-4">
                <div className="card  mb-3 p-0 serve-card" style={{height: '22rem'}}>
                  <img src={fruits} className="card-img-top" alt="fruits"  />
                  <div className="card-body">
                    <h5 className="card-title">GROCERY SHOPPING</h5>
                    <h6 className="card-text">Grocery shopping delivery personal shopper services.
                      Send us your list, we'll have them delivered.</h6>
                  </div>
                </div>
              </div>  
              <div className=" col-md-4 ">
                <div className="card  mb-3 p-0 serve-card" style={{height: '22rem'}}>
                  <img src={truckin} className="card-img-top" alt="truck"  />
                  <div className="card-body">
                    <h5 className="card-titlet">TRANSPORTATION</h5>
                    <h6 className="card-text">Powered by our own fleet of new vehicles ranging from 2 ton steel vans,
                      3.5 and 5 MVCs (Medium Chassis Vehicles) to 12 ton trucks.</h6>
                  </div>
                </div>
              </div>                              
            </div>
          </div>       
        </div>
        <div className="top-sixth-row  jumbotron mb-0">
          <div className="sixth-row-div text-center">
            <h3>TESTIMONIALS</h3>
            <p>This is what people are saying about us</p>
          </div>  
          <div className="container">
            <div className="row star-div ">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <StarIcon size="36" />
                <StarIcon size="36" />
                <StarIcon size="36" />
                <StarIcon size="36" />
                <StarIcon size="36" />
                <div>Agkolchipserrands is a world class service.</div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <StarIcon size="36" />
                <StarIcon size="36" />
                <StarIcon size="36" />
                <StarIcon size="36" />
                <StarIcon size="36" />
                <div>Is your work so hectic that you can't do nothing on the home front? agkolchipserrands will take care of that for you.</div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <StarIcon size="36" />
                <StarIcon size="36" />
                <StarIcon size="36" />
                <StarIcon size="36" />
                <StarIcon size="36" />
                <div>Agkolchipserrands has been really helpful for a working mom like me.</div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <StarIcon size="36" />
                <StarIcon size="36" />
                <StarIcon size="36" />
                <StarIcon size="36" />
                <StarHalfIcon size="36" />
                <div>The best that I have ever seen around.</div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="top-seventh-row" id="contacts">
          <img src={bkImage7} alt="form-background" className="seventh-row-img" />
          <div className="seventh-row-shadow"></div>
          <div className="container">
            <div className="seventh-row-content text-center">
              <h3 className="text-center">CONTACT US</h3>
              <p>YOU CAN ASK US ANYTHING</p>
            </div>
            <form  onSubmit={this.handleSubmit.bind(this)} className=" seventh-row-form ">
              <div className="form-row mb-5">
                <div className="col-md-4">
                  <label htmlFor="fname">First name</label>
                  <input 
                    name='fname'
                    className={`form-control ${this.state.fnameError ? 'is-invalid' : ''}`}
                    id="fname" 
                    placeholder="First name" 
                    value={this.state.fname}
                    onChange={this.handleFnameChange}
                    onBlur={this.validateFname} 
                  />
                  <div className="invalid-feedback">
                    {this.state.fnameError}
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="lname">Last name</label>
                  <input 
                    name='lname' 
                    className= {`form-control ${this.state.lnameError ? 'is-invalid' : ''}`} 
                    id="lname" 
                    placeholder="Last name" 
                    value={this.state.lname} 
                    onChange={this.handleLnameChange}
                    onBlur={this.validateLname} 
                  />
                  <div className="invalid-feedback">
                    {this.state.lnameError}
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    name='email' 
                    className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`} 
                    id="email" 
                    placeholder="Email" 
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    onBlur={this.validateEmail}  
                  />
                  <div className="invalid-feedback">
                    {this.state.emailError}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="FormControlTextarea">Your Message</label>
                <textarea 
                  name='msg'
                  className={`form-control ${this.state.msgError ? 'is-invalid' : ''}`}
                  value={this.state.msg}
                  onChange={this.handleMsgChange}
                  onBlur={this.validateMsg} 
                  id="msg" 
                  rows="4">
                  <div> {this.state.msgError} </div>                  
                </textarea>
              </div>
              <button className="button2 float-right mt-3 text-white" type="submit">Submit form</button>
            </form>
          </div>  
        </div>
        <div className="top-eighth-row">
          <div className="container ">
            <div className="row pt-5">
              <div className="col-sm-4">
                <h6 className="text-white">AGKOLCHIPS</h6>
                <p className="text-white">Everday is a new day for us and we
                  work really hard to satisfy our customer everywhere</p>
              </div>
              <div className="col-sm-4">
                <h6 className="text-white">GET IN TOUCH</h6>
                <p className="text-white">48,Lome Crescent Wuse,Zone 7 Abuja</p>
                <p className="text-white">+234 90-385-30886 +234 70-623-59535
                  info@agkolchips.com</p>
              </div>
              <div className="col-sm-4">
                <h6 className="text-white">USEFUL LINKS</h6>
                <ul>
                  <li><a className="text-white" href="#abtUs">About Us</a></li>
                  <li><a className="text-white" href="#contacts">Contact Us</a></li>
                  <li><a className="text-white" href="#services">Services</a></li>
                  <li><a className="text-white" href="#!">Our Networks</a></li>
                </ul>
              </div>
            </div>
            <hr className="col-12 bg-light mr-5"></hr>
            <p className="text-white">Copyright © 2018 AGKOLCHIPS</p>
          </div>
        </div> 
      </div>  
    );    
  }   
}

export default Contents;