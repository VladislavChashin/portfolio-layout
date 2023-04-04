import { useState, useEffect, useRef } from "react";


export default function Price(){
    const ref = useRef();
    const [scroll, setScroll] = useState(0)
    const [rects, setRects] = useState(null)

    useEffect(() => {
        const rect = ref.current.getBoundingClientRect();
        handleRef(rect.y)
      });
      const handleRef = (y) => {
        setRects(y);
        console.log(rects);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const divStyle = {
        transform: `translateX(${(rects - scroll/5.5)}px)`,
      };

    return(
        <div className="price">
            <div className="price_text-wrap">
                <div className="text-wrap_text" ref={ref} style={divStyle}>
                    <p>СОЗДАЮ </p> <p> УНИКАЛЬНЫЕ РЕШЕНИЯ </p>  <p> ДЛЯ ВАШЕГО ПРОЕКТА</p>
                </div>    
            </div>
            <div className="price_price-wrap">
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