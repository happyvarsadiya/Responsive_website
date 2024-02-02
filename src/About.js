import Header from "./Header";
import {Row,Col, Container,} from 'react-bootstrap';
import { FaCaretRight } from "react-icons/fa6";
import Features from "./Features";
import { FaFacebookF,FaTwitter,FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Reservation from "./Reservation";
import Testimonial from "./Testimonial";
import Visitor from "./Visitor";
import Newslider from "./Newslider";
import Footer from "./Footer";


function About()
{
    return(
        <>
            {/* start header */}
            <Header></Header>

            {/* start slider */}
            <div className="bg-black">
            <div className="ab_slider">
                <p className="s_txt text-white text-center "> ABOUT US </p>
            </div>
            

            {/* start who we are */}
        <Container>
            <Row>
                <Col>
                <div className="spacer">
                      <p className="about fw-bold text-center"> ---- ABOUT US </p>
                      <p className="about_txt text-center mt-3">We Invite You to <br></br>Visit Our Restaurant</p>
                      <p className="text-light text-center m-4">Assumenda possimus eaque illo iste, autem. Porro eveniet, autem ipsam vitae amet repellat repudiandae tenetur, quod corrupti consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat. Cumque, consequatur! Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat. Cumque, consequatur!</p>
                    </div>     
                </Col>
            </Row>
            <Row>
                    <Col lg={3} md={6} >
                        <div className="png_about ms-5">
                            <img src={require('./image/ab1.png')}></img>
                            <h6 className="text-light mt-3 ms-2">HTFG 2020</h6>
                        </div>
                    </Col>
                    <Col lg={3} md={6} >
                        <div className="png_about ms-5">
                            <img src={require('./image/ab2.png')}></img>
                            <h6 className="text-light mt-3 ms-2">HTF 2018</h6>
                        </div>
                    </Col>
                    <Col lg={3} md={6} >
                        <div className="png_about ms-5">
                            <img src={require('./image/ab3.png')}></img>
                            <h6 className="text-light mt-3 ms-2">GFA 2019</h6>
                        </div>
                    </Col>
                    <Col lg={3} md={6} >
                        <div className="png_about ms-5">
                            <img src={require('./image/ab4.png')}></img>
                            <h6 className="text-light mt-3 ms-2">LUA 2021</h6>
                        </div>
                    </Col>
            </Row>
            
        {/* photo video */}
        <div className="photo mt-5">
            <div className="video">
                <p className="text-center"><button><FaCaretRight className="fs-3 text-light"></FaCaretRight></button></p>
            </div>
        </div>

        {/* start features */}
        <div className="spacer">
            <Features></Features>
        </div>

        {/* strat team */}
        <Row>
            <Col>
                <div className="spacer">
                    <p className="about fw-bold text-center"> ---- TEAM </p>
                    <p className="about_txt text-center mt-3">They Are Ready to Treat You </p>
                    <p className="text-light text-center m-4">Porro eveniet, autem ipsam corrupti consectetucum.
                    <br></br>Repudiandae dignissimos fugiat sit nam.</p>
                </div>     
            </Col>
        </Row>
            <Row>
                <Col lg={4} sm={12}>
                    <div className="ready">
                        <img src={require('./image/team1.webp')} className="w-100"></img>
                        <p className="r_txt text-light mt-3 fs-4"> Emma Newman </p>
                        <h5 className="text-light">Barista</h5>
                        <p className="ab_icon"><span><FaFacebookF></FaFacebookF></span>
                            <span><FiInstagram></FiInstagram></span>
                            <span><FaTwitter></FaTwitter></span>
                            <span><FaYoutube></FaYoutube></span>
                        </p>
                    </div>
                </Col>
                <Col lg={4} sm={12}>
                    <div className="ready">
                        <img src={require('./image/team2.webp')} className="w-100"></img>
                        <p className="r_txt text-light mt-3 fs-4"> Paul Trueman </p>
                        <h5 className="text-light">Barista</h5>
                        <p className="ab_icon"><span><FaFacebookF></FaFacebookF></span>
                            <span><FiInstagram></FiInstagram></span>
                            <span><FaTwitter></FaTwitter></span>
                            <span><FaYoutube></FaYoutube></span>
                        </p>
                    </div>
                </Col>
                <Col lg={4} sm={12}>
                    <div className="ready">
                        <img src={require('./image/team3.webp')} className="w-100"></img>
                        <p className="r_txt text-light mt-3 fs-4"> Oscar Oldman </p>
                        <h5 className="text-light">Barista</h5>
                        <p className="ab_icon"><span><FaFacebookF></FaFacebookF></span>
                            <span><FiInstagram></FiInstagram></span>
                            <span><FaTwitter></FaTwitter></span>
                            <span><FaYoutube></FaYoutube></span>
                        </p>
                    </div>
                </Col>
            </Row>

        {/* start testimonial */}
        <div className="spacer">
            <Testimonial></Testimonial>
        </div>

        {/* start Condown */}
        <Container>
            <Row>
            <Col>
                <div className="cont m-5">
                    <p className="text-light big">200</p>
                    <p className="text-warning-emphasis fw-bolder">VISITORS DAILY</p>
                </div>
            </Col>
            <Col>
                <div className="cont m-5">
                    <p className="text-light big">400</p>
                    <p className="text-warning-emphasis fw-bolder">DELIVERIES MONTHLY</p>
                </div>
            </Col>
            <Col>
                <div className="cont m-5">
                    <p className="text-light big">100</p>
                    <p className="text-warning-emphasis fw-bolder">POSITIVE FEEDBACK</p>
                </div>
            </Col>
            <Col>
                <div className="cont m-5">
                    <p className="text-light big">400</p>
                    <p className="text-warning-emphasis fw-bolder">AWARDS AND HONORS</p>
                </div>
            </Col>
            </Row>
        </Container>

        {/* strat Recipes of Our Barista */}
        <Visitor></Visitor>
        
    </Container>

        {/* start New Slider */}
        <Newslider></Newslider>

        {/* start footer */}
        <Footer></Footer>
        
            </div>
        </>
    )
};
export default About;
