import style from '../src/module/App.module.css';
import { Image } from 'react-bootstrap';
import summary from './img/summary_26.png'
import list from './img/list_32.png';
import project from './img/project_32.png';

function App() {
  return (
    <div className="App">
      <div className={ style.header } >
        <div className='logo' >
          <div className={ style.logo_col }>
            <div className={ style.logoRow1 } >EMPC</div>
            <div className={ style.logoRow2 }  >
              <div>Enterprise Project</div>
              <div>Management Companion</div>
            </div>
          </div>
        </div>
        <div className={ style.userLigin } >
          <div className={ style.signIn } > Sign In </div>
          <div className={ style.signUp } > Sign Up </div>
        </div>
      </div>
      <div className={ style.main }>
        <div className={ style.mainSidebar } >
          <div className={ style.sidebarBtn } >
            <Image  className={ style.img } src={ summary } width={ 32 }></Image>
            <span>Summary</span>
            </div>
          <div className={ style.sidebarBtn } >
            <Image className={ style.img } src={ list }></Image>
            <span>customer LIst</span>
            </div>
          <div>Project LIst</div>
          <div>Project History</div>
        </div>
        <div className={ style.mainData} >data</div>
      </div>
      <div className={style.bottom}>bottom</div>
    </div>
  );
}

export default App;
