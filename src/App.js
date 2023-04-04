import './sourse/style/App.css'
import AboveAll from "./components/header/aboveAll";
import AboutMe from './components/header/aboutMe';
import MyWorks from './components/main/myWorks';
import Price from './components/footer/price';
import Contact from './components/footer/contacts';

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
      <footer>
        <Price/>
        <Contact/>
      </footer>
    </>
  );
}

export default App;
