// import React, { Component } from 'react';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Row, Col, Container } from 'react-bootstrap';
import myimg from './image/t1.jpeg';
import myimg2 from './image/t2.jpeg';
import myimg3 from './image/t3.jpeg';

const option = {
    margin:30,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}

function Testimonial() {
    
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <p className="about fw-bold text-center"> ---- TESTIMONIALS </p>
                        <p className="about_txt text-center"> What Our Visitors Say? </p>
                        <p className="m-4 mb-5 text-center text-light">Porro eveniet, autem ipsam corrupti consecteturcum.Repudiandae dignissimos fugiat sit nam.!.</p>
                    </Col>
                </Row>

                <OwlCarousel className='owl-theme' loop  nav {...option}>
                    <div class='item'>
                        <div className='test'>
                            <p className='t_txt text-center' > The best restaurant! </p>
                            <p className='text_txt'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eligendi dolorem? Voluptates rem magnam nesciunt ullam hic error sed, minus, accusantium inventore ex reprehenderit ipsum aperiam libero ut, laudantium delectus deleniti debitis quas dolore quos. Accusamus ea saepe, veniam. Nemo.
                            </p>
                            <div className='sec_test d-flex'>
                                <div className='img_t'>
                                    <img src={myimg} className='text_img'></img>
                                </div>
                                <div className='os_t'>
                                    <h5> Oscar Oldman </h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class='item'>
                        <div className='test'>
                            <p className='t_txt text-center' >  It was very delicious!  </p>
                            <p className='text_txt'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eligendi dolorem? Voluptates rem magnam nesciunt ullam hic error sed, minus, accusantium inventore ex reprehenderit ipsum aperiam libero ut, laudantium delectus deleniti debitis quas dolore quos. Accusamus ea saepe, veniam. Nemo.
                            </p>
                            <div className='sec_test d-flex'>
                                <div className='img_t'>
                                    <img src={myimg2} className='text_img'></img>
                                </div>
                                <div className='os_t'>
                                    <h5>  Emma Newman  </h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class='item'>
                        <div className='test'>
                            <p className='t_txt text-center' >  I'm delighted!  </p>
                            <p className='text_txt'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eligendi dolorem? Voluptates rem magnam nesciunt ullam hic error sed, minus, accusantium inventore ex reprehenderit ipsum aperiam libero ut, laudantium delectus deleniti debitis quas dolore quos. Accusamus ea saepe, veniam. Nemo.
                            </p>
                            <div className='sec_test d-flex'>
                                <div className='img_t'>
                                    <img src={myimg3} className='text_img'></img>
                                </div>
                                <div className='os_t'>
                                    <h5>  Viktoria Freeman  </h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class='item'>
                        <div className='test'>
                            <p className='t_txt text-center' >  I'm delighted!  </p>
                            <p className='text_txt'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eligendi dolorem? Voluptates rem magnam nesciunt ullam hic error sed, minus, accusantium inventore ex reprehenderit ipsum aperiam libero ut, laudantium delectus deleniti debitis quas dolore quos. Accusamus ea saepe, veniam. Nemo.
                            </p>
                            <div className='sec_test d-flex'>
                                <div className='img_t'>
                                    <img src={myimg3} className='text_img'></img>
                                </div>
                                <div className='os_t'>
                                    <h5>  Viktoria Freeman  </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </Container>
        </>
    )
};
export default Testimonial;