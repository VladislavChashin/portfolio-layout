import './sourse/style/App.scss'
import AboveAll from "./components/header/aboveAll";
import AboutMe from './components/header/aboutMe';
import MyWorks from './components/main/myWorks';

function App() {
  return (
    <>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
      <header>
        <div className="header_content">
          <AboveAll/> 
          <AboutMe/>
        </div>
      </header>
      <main>
        <MyWorks/>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
