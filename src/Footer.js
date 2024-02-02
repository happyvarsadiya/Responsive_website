import {Row,Col, Container} from 'react-bootstrap';
import myimg from './image/logo.png'
import { FaFacebookF,FaTwitter,FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Footer()
{
    return(
        <>
            <div className="spacer">
                <Container>
                    <Row>
                        <Col>
                            <img src={myimg} className='logoimg'></img>
                        </Col>
                        <Col>
                            <div className='icons'>
                                <div className='d-flex all_icon'>
                                    <p><FaFacebookF></FaFacebookF></p>
                                    <p><FiInstagram></FiInstagram></p>
                                    <p><FaTwitter></FaTwitter></p>
                                    <p><FaYoutube></FaYoutube></p>
                                </div>
                            </div>
                        </Col>
                    </Row>


                    <div className='footerline'>
                        <div className='spacer'>
                            <Row>
                                <Col lg={4} md={12}>
                                    <div className='f_about'>
                                        <h2 className='f_txt'>About us</h2>
                                        <p className='f_prg mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur fugiat maiores id magni, modi, quaerat vitae.</p>
                                    </div>
                                </Col>   
                                <Col lg={4} md={12}>
                                    <div className='f_about'>
                                        <h2 className='f_txt'>Contact info</h2>
                                        <div className='mt-4 con_txt'>
                                            <p><span className='fw-bold me-3'>CALL :</span> +76 (094) 754 43 7I</p>
                                            <p><span className='fw-bold me-3'>WRITE :</span>your.email.inbox@here.com</p>
                                            <p><span className='fw-bold me-3'>FIND US :</span> Canada, Toronto, Avenue 31B, </p>                                            
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={12}>
                                <div className='f_about'>
                                        <h2 className='f_txt'>Gallery</h2>
                                        <div className='f_img d-flex mt-4'>
                                            <img src={require('./image/fo1.jpeg')}></img>
                                            <img src={require('./image/fo2.jpeg')}></img>
                                            <img src={require('./image/fo3.jpeg')}></img>
                                        </div>
                                    </div>
                                </Col> 
                            </Row>     
                        </div>
                    </div>
        
                    <div className='footerline'>
                            <Row>
                                <Col>
                                    <p className='copyright mt-4'>© Tastyc 2022 . All rights reserved.</p>
                                </Col>
                                <Col>
                                    <p className='back mt-4 fw-bold fs-5'>BACK TO TOP</p>
                                </Col>
                            </Row>
                    </div>  

                </Container>
            </div>
        </>
    )
};
export default Footer;