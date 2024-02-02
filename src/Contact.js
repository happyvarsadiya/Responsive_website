import Header from "./Header";
import {Row,Col, Container,} from 'react-bootstrap';
import Newslider from "./Newslider";
import Footer from "./Footer";


function Contact()
{
    return(
        <>
        
        {/* start header */}
        <Header></Header>

        {/* start slider */}
        <div className="bg-black">
            
            <div className="co_slider">
                <p className="co_slider text-white text-center "> CONTACT </p>
            </div>
        
        {/* start get in touch */}
        <Container>
            <Row>
                <Col>
                <div className="spacer">
                      <p className="about fw-bold text-center"> ---- GET IN TOUCH </p>
                      <p className="about_txt text-center mt-3">Contact Information</p>
                      <p className="text-light text-center m-4">Porro eveniet, autem ipsam vitae consequatur!!</p>
                    </div>     
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={6}>
                <div className="all_icons">
                    <p className="text-center"><img src={require('./image/c_icon1.png')} className="con_icon"></img></p>
                    <p className="i_txt mt-4 fs-4 text-center">Write Us</p>
                    <p className="text-center fs-5">info@tastyc.com</p>
                </div>
                </Col>
                <Col  lg={4} md={6}>
                <div className="all_icons">
                    <p className="text-center"><img src={require('./image/c_icon2.png')} className="con_icon"></img></p>
                    <p className="i_txt mt-4 fs-4 text-center"> Call Us </p>
                    <p className="text-center fs-5">+76 (094) 754 43 71 +76 (093) 753 43 72</p>
                </div>
                </Col>
                <Col  lg={4} md={6}>
                <div className="all_icons">
                    <p className="text-center"><img src={require('./image/c_icon3.png')} className="con_icon"></img></p>
                    <p className="i_txt mt-4 fs-4 text-center">Visit Us</p>
                    <p className="text-center fs-5">Canada, Toronto, North Avenue 31B</p>
                </div>
                </Col>
            </Row>

            {/* start  Write Us a Message */}
            <div className="spacer">
            <Row>
                <Col>
                    <div className="spacer">
                      <p className="about fw-bold text-center"> ---- CONTACT FORM </p>
                      <p className="about_txt text-center mt-3">Write Us a Message</p>
                      <p className="text-light text-center m-4">Porro eveniet, autem ipsam vitae consequatur!!</p>
                    </div>     
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <div className="con_input fs-6">
                        <input type='text' placeholder='FIRST NAME' className="w-100"></input>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="con_input fs-6">
                        <input type='text' placeholder='LAST NAME' className="w-100"></input>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="con_input fs-6">
                        <input type='text' placeholder='PHONE NUMBER' className="w-100"></input>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="con_input fs-6">
                        <input type='text' placeholder='EMAIL' className="w-100"></input>
                    </div>
                </Col>
                <Col lg={12}>
                    <textarea placeholder="MESSAGE" className="w-100 text_area p-3"></textarea>
                </Col>
            </Row>
        </div>
    </Container>

    {/* start new slider */}
    <Newslider></Newslider>
        
    {/* start footer */}
    <Footer></Footer>

        </div>
        </>
    )
};
export default Contact;