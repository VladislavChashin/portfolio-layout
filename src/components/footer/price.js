import { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';


export default function Price(){
    const darkMode = useSelector((state) => state.counter.value)

    const ref = useRef();
    const [scroll, setScroll] = useState(0)
    const [rects, setRects] = useState(null)

    useEffect(() => {
        const rect = ref.current.getBoundingClientRect();
        handleRef(rect.y)
        // console.log(rects)
        console.log(window.innerHeight/2);
    });
    const handleRef = (y) => {
        setRects(y);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const divStyle = {
        transform: `translateX(${(rects - (window.innerHeight / 1.8)) / 2}vw)`,
      };

    return(
        <div className={ darkMode ? "price dark": "price"}>
            <div className="price_text-wrap">
                <div className={ darkMode ? "text-wrap_text dark": "text-wrap_text"} ref={ref} style={divStyle}>
                    <p>СОЗДАЮ </p> <p> УНИКАЛЬНЫЕ РЕШЕНИЯ </p>  <p> ДЛЯ ВАШЕГО ПРОЕКТА</p>
                </div>    
            </div>
            <div className={ darkMode ? "price_price-wrap dark": "price_price-wrap"}>
                    <div className="price_price-string">
                        <p>UI/UX дизайн</p> <p>от 10.000₽</p> <p><b>Срок выполнения:</b>от 7 дней</p>
                    </div>
                    <div className="price_price-string">
                        <p>Landing Page</p> <p>от 6.000₽</p> <p><b>Срок выполнения:</b>от 7 дней</p>
                    </div>
                    <div className="price_price-string">
                        <p>Интернет-магазин</p> <p>от 15.000₽</p> <p><b>Срок выполнения:</b>от 12 дней</p>
                    </div>
                    <div className="price_price-string">
                        <p>Фирменный стиль</p> <p>от 6.000₽</p> <p><b>Срок выполнения:</b>от 10 дней</p>
                    </div>
                    <div className="price_price-string">
                        <p>Прочие услуги</p> <p>от 2.000₽</p> <p><b>Срок выполнения:</b>от 3 дней</p>
                    </div>
                </div>
        </div>
    )
}