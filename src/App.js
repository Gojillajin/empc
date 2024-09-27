import style from '../src/module/App.module.css';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import summary from './img/summary_26.png'
import list from './img/list_32.png';
import project from './img/project_32.png';
import user from './img/user_50.png';
import signIn from './img/log in_50.png';
import signUp from './img/sign up_24.png';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={2} >
            <div className={ style.sidebar } >
              <div className={ style.logoContainer } >
                <div className={ style.logo } >
                  EMPS
                </div>
                <div className={ style.productName } >
                  <p style={{ margin:0}} >Enterprise Project</p>
                  <p style={{ margin:0, color: '#FF6B6B'  }} >Management System</p>
                </div>
              </div>
              <div style={{ width : '86%' , borderBottom : '1px solid rgba(255, 255, 255, 0.529)', margin : '0 20px 0 20px'}} ></div>
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
              <div style={{ width : '86%' , borderBottom : '1px solid rgba(255, 255, 255, 0.529)', margin : '0 20px 0 20px', marginBottom : '20px'}} ></div>
              <div className={ style.loginOut } >
                <div className={ style.btn } >
                  <Image src={ signIn } style={{ margin : '0 16px 0 40px' }} width={24}></Image><span>Sign In</span>
                </div>
                <div className={ style.btn } >
                  <Image src={ signUp } style={{ margin : '0 16px 0 40px' }} width={24}></Image><span>Sign Up</span>
                </div>
              </div>
            </div>
          </Col>
          <Col md={10} style={{ backgroundColor:'#FAFAFA'}}>
            <Dashboard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
