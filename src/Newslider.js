import {Row,Col, Container} from 'react-bootstrap';

function Newslider()
{
    return(
        <>
            <div className='spacer all_new'>
                <img src={require('./image/new.jpeg')} className='w-100 new_img'></img>
                <Container>
                    <Row>
                        <Col lg={6} md={12}>
                            <div className='new_txt'>
                                <p className="about fw-bold text-light text-start mt-5"> ---- NEWSLETTER </p>
                                <p className="new_text text-start"> Use the Tips and Recipes of Our Barista </p>
                                <p className='text-light fw-bold fs-5 '> Rolorem, beatae dolorum, praesentium itaque et quam quaerat.</p>
                                <p><input type='text' value='Enter Your Email Here' className='new_input'></input>
                                    <button className='new_btn'>SUBSCRIBE</button>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
};
export default Newslider;