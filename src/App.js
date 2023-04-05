import './sourse/style/App.scss'
import AboveAll from "./components/header/aboveAll";
import AboutMe from './components/header/aboutMe';
import MyWorks from './components/main/myWorks';
import Price from './components/footer/price';
import Contact from './components/footer/contacts';
import SwithTheme from './components/swithTheme';
import { useSelector } from 'react-redux';

function App() {
  const darkMode = useSelector((state) => state.counter.value)

  return (
    <div className={darkMode ? "root dark": "root"}>
      <span></span>
      <span></span>
      <span></span>
      <span></span> 
      <SwithTheme/>
        <header className={darkMode ? 'dark': ''}>
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
    </div>
  );
}

export default App;
