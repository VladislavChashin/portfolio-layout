import face from '../../sourse/image/head.svg'
import vector from '../../sourse/image/Vector.svg'
import vector1 from '../../sourse/image/Vector1.svg'
import strelka from '../../sourse/image/strelka.svg'
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';

export default function AboveAll(){
    const darkMode = useSelector((state) => state.counter.value)

    return(
        <>
            <div className={darkMode ? "above-all dark": "above-all"}>
                <div className="above-all_text">
                    <h1>UI/UX & Web Designer</h1>
                    <div className="above-all_face">
                        <img src={face} alt="" />
                        <div className="wrap">
                            <img src={vector1} alt="" />
                            <p>Не срываю сроки</p>
                        </div>
                        <div className="wrap">
                            <img src={vector} alt="" />
                            <p> Первый экран - бесплатно</p>
                        </div>
                    </div>
                </div>
                <div className="above-all_nav">
                    <nav>
                        <ul>
                            <li><Link to="work" spy={true} smooth={true}>Работы</Link> </li>
                            <li><Link to="aboutMe" spy={true} smooth={true}>Обо мне</Link></li>
                            <li><Link to="contacts" spy={true} smooth={true}>Контакты</Link></li>
                        </ul>
                    </nav>
                    <Link to="aboutMe" smooth={true} duration={1000}>
                        <div className={darkMode ? "nav_hover dark": "nav_hover"}>
                            <img src={strelka} alt="" />
                        </div>
                    </Link> 
                </div>
            </div>
        </>
    )
}