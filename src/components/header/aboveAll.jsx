import face from '../../sourse/image/head.svg'
import vector from '../../sourse/image/Vector.svg'
import vector1 from '../../sourse/image/Vector1.svg'
import strelka from '../../sourse/image/strelka.svg'
export default function AboveAll(){
    return(
        <>
            <div className="above-all">
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
                            <li><a href="">Работы</a></li>
                            <li><a href="">Обо мне</a></li>
                            <li><a href="">Контакты</a></li>
                        </ul>
                    </nav>
                    <div className="nav_hover">
                        <img src={strelka} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}