import Header from "./Header";
import Carousel from 'react-bootstrap/Carousel';
import {Row,Col, Container} from 'react-bootstrap';
import Features from "./Features";
import Reservation from "./Reservation";
import Testimonial from "./Testimonial";
// import { FaAngleRight } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";
import Visitor from "./Visitor";
import Newslider from "./Newslider";
import Footer from "./Footer";


function Home()
{
    return(
    <>
        {/* start header */}
        <Header></Header>

       {/* start slider */}
        <Carousel fade>
        <Carousel.Item>
            <img src={require('./image/slider1.jpeg')} className="w-100 s_img"></img>
            <div className="layer"></div>
                <Carousel.Caption>
                    <div className="slider_txt">
                        <h6 className="fw-bold m-4 text-uppercase">  Welcome to Tastyc  </h6>
                        <p className="s_txt text-uppercase"> Coffee & Chocolate </p>
                        <button className="s_btn p-3 fw-medium">BOOK A TABLE</button> 
                        <button className="sec_btn p-3 m-3 fw-medium">OPEN MENU</button>           
                    </div>
                </Carousel.Caption>
      </Carousel.Item>  
      <Carousel.Item>
            <img src={require('./image/slider2.jpeg')} className="w-100 s_img"></img>
            <div className="layer"></div>
                <Carousel.Caption>
                    <div className="slider_txt">
                        <h6 className="fw-bold m-4 text-uppercase">  hello , new friend ! </h6>
                        <p className="s_txt text-uppercase">  Reserve Your Table  </p>
                        <button className="s_btn p-3 fw-medium">BOOK A TABLE</button> 
                        <button className="sec_btn p-3 m-3 fw-medium">OPEN MENU</button>           
                    </div>
                </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img src={require('./image/slider3.jpeg')} className="w-100 s_img"></img>
            <div className="layer"></div>
                <Carousel.Caption>
                    <div className="slider_txt">
                        <h6 className="fw-bold m-4 text-uppercase">  Dolce Gusto </h6>
                        <p className="s_txt text-uppercase">  Visit to Our Store  </p>
                        <button className="s_btn p-3 fw-medium">BOOK A TABLE</button> 
                        <button className="sec_btn p-3 m-3 fw-medium">OPEN MENU</button>           
                    </div>
                </Carousel.Caption>
      </Carousel.Item>
        </Carousel>

        {/* start about us */}
        <div className="bg-black">
        <Container>
        <Row>
            <Col lg={6} md={12}>
                <div className="text-light spacer left">
                    <p className="about fw-bold ms-5"> --n-- ABOUT US </p>
                    <p className="about_txt me-5 ms-5">We Invite You to Visit Our Coffee House</p>
                    <p className="m-4 ms-5">Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat.</p>
                    <button className='t_btn ms-5 ps-4'> READ MORE  </button>
                </div>   
            </Col>
            <Col lg={6} md={12}>
                <div className="spacer">
                    <img src={require('./image/a1.jpeg')} className="w-100"></img>  
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={6} md={12}>
                <div className="">
                    <img src={require('./image/a2.jpeg')} className="w-100"></img>  
                </div>
            </Col>
            <Col lg={6} md={12}>
                <div className="text-light  left">
                    <p className="about fw-bold ms-5"> ---- COFFEE MENU </p>
                    <p className="about_txt me-5 ms-5">Quality Kava Beans</p>
                    <p className="m-4 ms-5">Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat.</p>
                    <button className='t_btn ms-5 ps-4'> VIEW MENU  </button>
                </div>   
            </Col>
        </Row>
        <Row>
            <Col lg={6} md={12}>
                <div className="text-light spacer left">
                    <p className="about fw-bold ms-5"> ---- OUR TEAM </p>
                    <p className="about_txt me-5 ms-5"> Use the Tips & Recipes of Our Barista </p>
                    <p className="m-4 ms-5">Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat.</p>
                    <button className='t_btn ms-5 ps-4'> MEET THE TEAM  </button>
                </div>   
            </Col>
            <Col lg={6} md={12}>
                <div className="spacer">
                    <img src={require('./image/a1.jpeg')} className="w-100"></img>  
                </div>
            </Col>
        </Row>    
        </Container>

        {/* start features */}
        <Features></Features>
    
        {/* strat RESERVATION */}
        <Reservation></Reservation>

        {/* start TESTIMONIAL */}
        <Testimonial></Testimonial>

        {/* start Condown */}
        <Container>
            <Row>
            <Col lg={3} md={6} xs={12}>
                <div className="cont m-5">
                    <p className="text-light big">200</p>
                    <p className="text-warning-emphasis fw-bolder">VISITORS DAILY</p>
                </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
                <div className="cont m-5">
                    <p className="text-light big">400</p>
                    <p className="text-warning-emphasis fw-bolder">DELIVERIES MONTHLY</p>
                </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
                <div className="cont m-5">
                    <p className="text-light big">100</p>
                    <p className="text-warning-emphasis fw-bolder">POSITIVE FEEDBACK</p>
                </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
                <div className="cont m-5">
                    <p className="text-light big">400</p>
                    <p className="text-warning-emphasis fw-bolder">AWARDS AND HONORS</p>
                </div>
            </Col>
            </Row>
        </Container>

        {/* start DOWNLOAD */}
        <Container>
            <Row>
                <Col>
                    <div className="down">
                        <div className="textof_d">
                            <p className="down_txt fw-bold text-center text-light"> ---- MOBILE APPLICATION</p>
                            <p className="work_t text-center"> DOWNLOAD OUR APPLICATION </p>
                            <p className="mt-4 mb-5 text-center text-light">Quaerat debitis, vel, sapiente dicta sequilabore porro pariatur harum expedita..</p>
                            {/* <button className='d_btn'><FaApple className="fs-3"></FaApple> APPSTORE  </button> */}
                        </div>  
                    </div>
                </Col>
            </Row>

        </Container>

        {/* start Visitors  */}
        <Visitor></Visitor>

        {/* start NEWSLETTER */}
        <Newslider></Newslider>

        {/* start Footer */}
        <Footer></Footer>

    </div>
    </>
    )
};

export default Home;