import { Row, Col, Container } from 'react-bootstrap';


function Visitor(){
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <p className="about fw-bold text-center mt-5"> ---- NEWSLETTER </p>
                        <p className="visi_txt"> Use the Tips and Recipes of Our Barista </p>
                        <p className="m-4 mb-5 text-center text-light">Porro eveniet, autem ipsam corrupti consectetur cum.
                        Repudiandae dignissimos fugiat sit nam.!.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={12}>
                        <div className='trip'>
                            <div className='trip_img'>
                                <img src={require('./image/r1.jpeg')} className='w-100'></img>
                            </div>
                            <div className='trip_t'>
                                <p className='fs-4 trip_txt'>Business Breakfast</p>
                                <p>
                                    Consectetur adipisicing elit. Soluta, impedit, saepe. Unde minima distinctio officiis amet temporibus, consequuntur dolorem dicta… READ MORE
                                </p>
                            </div>
                            <div className=' d-flex'>
                                <div><img className='admin_img ms-3' src={require('./image/admin.jpeg')}></img></div>
                                <div><h5 className='text-light m-3'>OLEKSANDR</h5></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className='trip'>
                            <div className='trip_img'>
                                <img src={require('./image/r2.jpeg')} className='w-100'></img>
                            </div>
                            <div className='trip_t'>
                                <p className='fs-4 trip_txt'>Pancakes Chocolate</p>
                                <p>
                                    Consectetur adipisicing elit. Soluta, impedit, saepe. Unde minima distinctio officiis amet temporibus, consequuntur dolorem dicta… READ MORE
                                </p>
                            </div>
                            <div className=' d-flex'>
                                <div><img className='admin_img ms-3' src={require('./image/admin.jpeg')}></img></div>
                                <div><h5 className='text-light m-3'>OLEKSANDR</h5></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className='trip'>
                            <div className='trip_img'>
                                <img src={require('./image/r3.jpeg')} className='w-100'></img>
                            </div>
                            <div className='trip_t'>
                                <p className='fs-4 trip_txt'>Tuna & Tomatoes</p>
                                <p>
                                    Consectetur adipisicing elit. Soluta, impedit, saepe. Unde minima distinctio officiis amet temporibus, consequuntur dolorem dicta… READ MORE
                                </p>
                            </div>
                            <div className=' d-flex'>
                                <div><img className='admin_img ms-3' src={require('./image/admin.jpeg')}></img></div>
                                <div><h5 className='text-light m-3'>OLEKSANDR</h5></div>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
};
export default Visitor;