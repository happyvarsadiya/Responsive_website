import Header from "./Header";
import {Row,Col, Container} from 'react-bootstrap';
import Visitor from "./Visitor";
import Reservation from "./Reservation";
import Footer from "./Footer";


function Menus(){
    return(
        <>

        {/* strat header */}
        <Header></Header>

         {/* start slider */}
         <div className="bg-black">
            <div className="ab_slider">
                <p className="s_txt text-white text-center "> MENU TABS </p>
            </div>
        </div>

        {/* start our menu */}
        <div className="bg-black spacer">
            <Container>
            <Row>
                <Col>
                    <p className="about fw-bold text-center"> ---- OUR MENUS </p>
                    <p className="about_txt text-center"> ALL </p>
                    <p className="m-4 mb-5 text-center text-light">Porro eveniet, autem ipsam vitae consequatur!.</p>
                </Col>
            </Row>

            <Row>
                <Col lg={6} md={12}>
                    <div className="menu_m">
                        <img src={require('./image/menu1.webp')} ></img>
                        <div className="menu_txt">
                            <h5 className="mt-3"> Dark Coffee </h5><h2>$ 4.99</h2> 
                            <p className="fs-6">Consectetur adipisicing elit. Soluta, impedit, saepe.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className="menu_m">
                        <img src={require('./image/menu2.webp')} ></img>
                        <div className="menu_txt">
                            <h5 className="mt-3">  Espresso Martini  </h5><h2>$ 3.50</h2> 
                            <p className="fs-6">Consectetur adipisicing elit. Soluta, impedit, saepe.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className="menu_m">
                        <img src={require('./image/menu3.webp')} ></img>
                        <div className="menu_txt">
                            <h5 className="mt-3">  Fruity Cake  </h5><h2>$ 7.50</h2> 
                            <p className="fs-6">Consectetur adipisicing elit. Soluta, impedit, saepe.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className="menu_m">
                        <img src={require('./image/menu4.webp')} ></img>
                        <div className="menu_txt">
                            <h5 className="mt-3">  Croissants  </h5><h2>$ 10.99</h2> 
                            <p className="fs-6">Consectetur adipisicing elit. Soluta, impedit, saepe.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className="menu_m">
                        <img src={require('./image/menu5.webp')} ></img>
                        <div className="menu_txt">
                            <h5 className="mt-3">  Coffee Beverage  </h5><h2>$ 1.99</h2> 
                            <p className="fs-6">Consectetur adipisicing elit. Soluta, impedit, saepe.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className="menu_m">
                        <img src={require('./image/menu6.webp')} ></img>
                        <div className="menu_txt">
                            <h5 className="mt-3">  Cold Americano  </h5><h2>$ 4.99</h2> 
                            <p className="fs-6">Consectetur adipisicing elit. Soluta, impedit, saepe.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className="menu_m">
                        <img src={require('./image/menu7.webp')} ></img>
                        <div className="menu_txt">
                            <h5 className="mt-3">   Pancakes  </h5><h2>$ 10.99</h2> 
                            <p className="fs-6">Consectetur adipisicing elit. Soluta, impedit, saepe.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className="menu_m">
                        <img src={require('./image/menu8.webp')} ></img>
                        <div className="menu_txt">
                            <h5 className="mt-3">  Bacon & eggs  </h5><h2>$ 3.50</h2> 
                            <p className="fs-6">Consectetur adipisicing elit. Soluta, impedit, saepe.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className="menu_m">
                        <img src={require('./image/menu9.webp')} ></img>
                        <div className="menu_txt">
                            <h5 className="mt-3">  Cupcakes </h5><h2>$ 10.99</h2> 
                            <p className="fs-6">Consectetur adipisicing elit. Soluta, impedit, saepe.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className="menu_m">
                        <img src={require('./image/menu10.webp')} ></img>
                        <div className="menu_txt">
                            <h5 className="mt-3">  Fruit Salad  </h5><h2>$ 5.50</h2> 
                            <p className="fs-6">Consectetur adipisicing elit. Soluta, impedit, saepe.</p>
                        </div>
                    </div>
                </Col>    
            </Row>

            {/* start Specia menu */}
            <Visitor></Visitor>
    
    </Container>
    
            {/* start reservition */}
            <Reservation></Reservation>
  
            {/* start footer */}
            <Footer></Footer>

            </div>
        </>
    )
};
export default Menus;