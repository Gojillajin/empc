import style from '../src/module/App.module.css';

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
          <div className={ style.signUp } > Sign UP </div>
        </div>
      </div>
      <div className={ style.main }>
        <div className={ style.mainSidebar } >
          <div>main</div>
          <div>customer LIst</div>
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
