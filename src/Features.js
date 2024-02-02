import { Container } from "react-bootstrap";
import {Row,Col} from 'react-bootstrap';

function Features(){
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <p className="about fw-bold text-center"> ---- FEATURES </p>
                    <p className="about_txt text-center"> Why people choose us? </p>
                    <p className="m-4 mb-5 text-center text-light">Porro eveniet, autem ipsam vitae consequatur!.</p>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={12}>
                    <div className="feau m-4 text-center">
                        <p><img src={require('./image/f1.png')} className="features"></img></p>
                        <p className="feau_text text-uppercase  mt-4"> Menu For Every Taste </p>
                        <p className="feau_txt text-secondary mt-4">Dolor sit amet, consectetur adipisicing elit et molestias possimus</p>
                    </div>
                </Col>
                <Col lg={4} md={12}>
                    <div className="feau m-4 text-center">
                        <p><img src={require('./image/f2.png')} className="features"></img></p>
                        <p className="feau_text text-uppercase  mt-4"> Always Quality Beans </p>
                        <p className="feau_txt text-secondary mt-4">Assumenda possimus eaque illo iste, autem. Porro eveniet autem</p>
                    </div>
                </Col>
                <Col lg={4} md={12}>
                    <div className="feau m-4 text-center">
                        <p><img src={require('./image/f3.png')} className="features"></img></p>
                        <p className="feau_text text-uppercase  mt-4"> Experienced Barista </p>
                        <p className="feau_txt text-secondary mt-4">Rolorem, beatae dolorum, praesentium itaque et quam quaerat</p>
                    </div>
                </Col>
            </Row>
        </Container>
    
        </>
    )
};
export default Features;