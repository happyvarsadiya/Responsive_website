import { Container } from "react-bootstrap";
import {Row,Col} from "react-bootstrap";

function Reservation(){
    return(
        <>
            <div className="work spacer">
                <img src={require('./image/work.jpeg')} className="work_img"></img>
                    <Container>
                        <Row>
                            <Col lg={8} md={12}>
                            <div className="work_txt">
                                <p className="about fw-bold text-start"> ---- RESERVATION </p>
                                <p className="work_t text-start"> WORKING HOURS </p>
                                <p className="mt-4 mb-5 text-start text-light">Rolorem, beatae dolorum, praesentium itaque et quam quaerat.!.</p>
                                <button className='t_btn ms-0'> BOOK A TABLE </button>
                                <button className="sec_btn p-3 m-3 fw-medium text-ligth">CONTACT US</button> 
                            </div>    
                            </Col>
                            <Col lg={4}>
                                <div className="bg-black work_rigth text-center">
                                    <p className=" fw-bold">SUNDAY TO TUESDAY</p>
                                    <h3 className="">09 :: 00</h3>
                                    <h3 className="">22 :: 00</h3>

                                    <p className=" fw-bold">FRIDAY TO SATURDAY</p>
                                    <h3 className="">11 :: 00</h3>
                                    <h3 className="">19 :: 00</h3>
                                </div> 
                            </Col>
                        </Row>
                        
                    </Container>
                </div>
        </>
    )
};
export default Reservation;