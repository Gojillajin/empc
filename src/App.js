import style from '../src/module/App.module.css';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import summary from './img/summary_26.png'
import list from './img/list_32.png';
import project from './img/project_32.png';
import user from './img/user_50.png';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col lg={2} >
            <div className={ style.sidebar } >
              <div className={ style.logoContainer } >
                <div className={ style.logo } >
                  EMPC
                </div>
                <div className={ style.productName } >
                  <p style={{ margin:0}} >Enterprise Project</p>
                  <p style={{ margin:0}} >Management Companion</p>
                </div>
              </div>
              <div className={ style.btnContainer } >
                <div className={ style.btn } >
                    <Image src={ summary } style={{ margin : '0 16px 0 40px' }} width={24}></Image><span>Dashboard</span>
                  </div>
                  <div className={ style.btn } >
                    <Image src={ list } style={{ margin : '0 16px 0 40px' }} width={24} ></Image><span>Project Lists</span>
                  </div>
                  <div className={ style.btn } >
                    <Image src={ project } style={{ margin : '0 16px 0 40px' }} width={24} ></Image><span>Project Histories</span>
                  </div>
                  <div className={ style.btn } >
                    <Image src={ user } style={{ margin : '0 16px 0 40px' }} width={24} ></Image><span>Customers</span>
                  </div>
              </div>
              <div className={ style.userInfo } >
                <div className='sign button' >
                  <Button style={{ backgroundColor : '#ff6f61', border : '#ff6f61' }} >Sign In</Button>
                  <Button style={{ backgroundColor : '#ff6f61', border : '#ff6f61' }} >Sign Up</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={10} > <div className={ style.main } >main </div></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
