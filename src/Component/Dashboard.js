import { Col, Container, Image, Row } from "react-bootstrap";
import userImg from '../img/user_man_50.png';
import style from '../module/Dashboard.module.css';
import upArrow from '../img/up_26.png';
import downArrow from '../img/down_26.png';

function Dashboard() {
    return (
        <Container style={{ padding : '20px 0 20px 0' }} >
            <div className={ style.userInfo }>
                <span style={{ fontSize : '30px', color: 'rgb(44, 43, 43)', fontWeight : '500' }}> Dashboard </span>
                <div className="user">
                    <Image src={ userImg } width={40} style={{ marginRight : '10px' }} ></Image>
                    <span style={{ color : 'gray' }} >Kim JinYoung</span>
                </div>                
            </div>
            <div className={ style.userDashboard }>
                <p className={ style.customerTitle } >Customers</p>
                <Row>
                        <Col>
                            <div className={ style.customerTotal } >
                                <p style={{ fontSize:'18px', fontWeight: '500', color:'gray' }} >Total</p>
                                <div style={{ marginBottom:'10px' }} >
                                    <p style={{ fontWeight: '700', fontSize: '30px' }} >43,520</p>
                                    <div>
                                        <Image src={ upArrow } ></Image>
                                        <span style={{ color:'#20C997' }} >5.25%</span>
                                    </div>
                                </div>
                                <p style={{ color:'lightgray' }} >Since last month</p>
                            </div>
                        </Col>
                        <Col>
                        <div className={ style.customerTotal } >
                                <p style={{ fontSize:'18px', fontWeight: '500', color:'gray' }} >New</p>
                                <div style={{ marginBottom:'10px' }} >
                                    <p style={{ fontWeight: '700', fontSize: '30px' }} >20</p>
                                    <div>
                                        <Image src={ upArrow } ></Image>
                                        <span style={{ color:'#20C997' }} >5.25%</span>
                                    </div>
                                </div>
                                <p style={{ color:'lightgray' }} >Since last month</p>
                            </div> 
                        </Col>
                        <Col>
                            <div className={ style.customerTotal } >
                                <p style={{ fontSize:'18px', fontWeight: '500', color:'gray' }} >Total</p>
                                <div style={{ marginBottom:'10px' }} >
                                    <p style={{ fontWeight: '700', fontSize: '30px' }} >43,520</p>
                                    <div>
                                        <Image src={ upArrow } ></Image>
                                        <span style={{ color:'#20C997' }} >5.25%</span>
                                    </div>
                                </div>
                                <p style={{ color:'lightgray' }} >Since last month</p>
                            </div>
                        </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Dashboard;