import Header from "./Header";
import { Row, Col, Container, } from 'react-bootstrap';
import Newslider from "./Newslider";
import Footer from "./Footer";

function Blog() {
    return (
        <>
            {/* start header */}
            <Header></Header>

            {/* start slider */}
            <div className="bg-black">
                <div className="ab_slider">
                    <p className="s_txt text-white text-center "> OUR BLOG </p>
                </div>
            </div>

            {/* start Latest  */}
            <div className="bg-black">
                <Container>
                    <Row>
                        <Col>
                            <div className="spacer">
                                <p className="about fw-bold text-center"> ---- NEWSLETTER </p>
                                <p className="about_txt text-center mt-3"> Latest publications </p>
                                <p className="text-light text-center m-4">Porro eveniet, autem ipsam corrupti consectetur cum.
                                    Repudiandae dignissimos fugiat sit nam.</p>
                            </div>
                        </Col>
                    </Row>

        {/* strat  NEWSLETTER */}
            <Row>
                <Col lg={4} md={12}>
                    <div className='trip'>
                        <div>
                            <img src={require('./image/r1.jpeg')} className='w-100'></img>
                        </div>
                        <div className='trip_t'>
                            <p className='fs-4 trip_txt'>Business Breakfast</p>
                            <p>Consectetur adipisicing elit. Soluta, impedit, saepe. Unde minima distinctio     officiis amet temporibus, consequuntur dolorem dicta… READ MORE </p>
                        </div>
                        <div className=' d-flex'>
                            <div><img className='admin_img ms-3' src={require('./image/admin.jpeg')}></img></div>
                                <div><h5 className='text-light m-3'>OLEKSANDR</h5></div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={12}>
                    <div className='trip'>
                        <div>
                            <img src={require('./image/r2.jpeg')} className='w-100'></img>
                        </div>
                        <div className='trip_t'>
                            <p className='fs-4 trip_txt'>Pancakes Chocolate</p>
                            <p>Consectetur adipisicing elit. Soluta, impedit, saepe. Unde minima distinctio     officiis amet temporibus, consequuntur dolorem dicta… READ MORE </p>
                        </div>
                        <div className=' d-flex'>
                            <div><img className='admin_img ms-3' src={require('./image/admin.jpeg')}></img></div>
                                <div><h5 className='text-light m-3'>OLEKSANDR</h5></div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={12}>
                    <div className='trip'>
                        <div>
                            <img src={require('./image/r3.jpeg')} className='w-100'></img>
                        </div>
                        <div className='trip_t'>
                            <p className='fs-4 trip_txt'>Tuna & Tomatoes</p>
                            <p>Consectetur adipisicing elit. Soluta, impedit, saepe. Unde minima distinctio     officiis amet temporibus, consequuntur dolorem dicta… READ MORE </p>
                        </div>
                        <div className=' d-flex'>
                            <div><img className='admin_img ms-3' src={require('./image/admin.jpeg')}></img></div>
                                <div><h5 className='text-light m-3'>OLEKSANDR</h5></div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={12}>
                    <div className='trip'>
                        <div>
                            <img src={require('./image/r4.webp')} className='w-100'></img>
                        </div>
                        <div className='trip_t'>
                            <p className='fs-4 trip_txt'>Creamy Chicken </p>
                            <p>Consectetur adipisicing elit. Soluta, impedit, saepe. Unde minima distinctio     officiis amet temporibus, consequuntur dolorem dicta… READ MORE </p>
                        </div>
                        <div className=' d-flex'>
                            <div><img className='admin_img ms-3' src={require('./image/admin.jpeg')}></img></div>
                                <div><h5 className='text-light m-3'>OLEKSANDR</h5></div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={12}>
                    <div className='trip'>
                        <div>
                            <img src={require('./image/r5.webp')} className='w-100'></img>
                        </div>
                        <div className='trip_t'>
                            <p className='fs-4 trip_txt'>Air Fryer Salmon </p>
                            <p>Consectetur adipisicing elit. Soluta, impedit, saepe. Unde minima distinctio     officiis amet temporibus, consequuntur dolorem dicta… READ MORE </p>
                        </div>
                        <div className=' d-flex'>
                            <div><img className='admin_img ms-3' src={require('./image/admin.jpeg')}></img></div>
                                <div><h5 className='text-light m-3'>OLEKSANDR</h5></div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={12}>
                    <div className='trip'>
                        <div>
                            <img src={require('./image/r6.webp')} className='w-100'></img>
                        </div>
                        <div className='trip_t'>
                            <p className='fs-4 trip_txt'>Supporting food </p>
                            <p>Consectetur adipisicing elit. Soluta, impedit, saepe. Unde minima distinctio     officiis amet temporibus, consequuntur dolorem dicta… READ MORE </p>
                        </div>
                        <div className=' d-flex'>
                            <div><img className='admin_img ms-3' src={require('./image/admin.jpeg')}></img></div>
                                <div><h5 className='text-light m-3'>OLEKSANDR</h5></div>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>


        {/* start  NEWSLETTER part2*/}
        <Newslider></Newslider>
        
        {/* start Footer */}
        <Footer></Footer>

        </div>

        </>
    )
};
export default Blog;