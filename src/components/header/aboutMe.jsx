import body from '../../sourse/image/body.svg'
import vector from '../../sourse/image/Vector.svg'

export default function AboutMe (){
    return(
        <div className="aboutMe">
            <div className="aboutMe_image">
                <img src={body} alt="" />
                <div className="image_text">
                    <p>UI/UX & Web Designer</p>
                    <img src={vector} alt="" />
                </div>
            </div>
            <div className="aboutMe_text">
                <p>Привет! Меня зовут Антон
                    <br />
                    <br />
                    Я занимаюсь разработкой дизайна
                    сайтов, мобильных приложений
                    и созданием фирменного стиля.
                    <br />
                    <br />
                    Моя цель - это донести целевой
                    аудитории ценность вашего продукта
                    с помощью дизайна. 
                    <br />
                    <br />
                    <b>Поэтому перед тем, как приступать 
                    к работе, я провожу анализ вашей целевой
                    аудитории и конкурентов, чтобы правильно 
                    с ней взаимодействовать и достичь
                    наилучшего результата.</b></p>
            </div>
        </div>
    )
}