import krepko_one from '../../sourse/image/krepko_one.png'
import local_express_two from '../../sourse/image/local_express_two.png'
import sp_tehnolog_three from '../../sourse/image/sp_tehnolog_three.png'
import xMockup from '../../sourse/image/X-Mockup.png'
import MysLab_four from '../../sourse/image/MysLab_four.png'
import kards from '../../sourse/image/kards.png'
import enter from '../../sourse/image/enter.png'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'

export default function MyWorks(){
    const darkMode = useSelector((state) => state.counter.value)

    return(
        <div className={ darkMode ? "myWorks dark": "myWorks"} id='work'>
            <BlockWorks propsimage = {krepko_one} buttonProps= {["KREPKO Premium", "Зима 2021", "Landing Page"]}/>
            <BlockWorks propsimage = {local_express_two} buttonProps= {["Local Express", "Зима 2021", "Landing Page"]}/>
            <BlockWorks propsimage = {sp_tehnolog_three} buttonProps= {["СП-Технологии", "Лето 2021", "Landing Page"]}/>
            <BlockWorks propsimage = {xMockup} buttonProps= {["KREPKO", "Зима 2021", "UI/UX"]}/>
            <BlockWorks propsimage = {MysLab_four} buttonProps= {["MaysLab", "Лето 2021", "Landing Page", "https://www.behance.net/gallery/125038527/Landing-page-for-design-studio"]}/>
            <BlockWorks propsimage = {kards} buttonProps= {["Katit", "Осень 2021", "Branding", "https://www.behance.net/gallery/123914807/Branding-Katit"]}/>
            <BlockWorks propsimage = {enter} buttonProps= {["Enter Digital", "Осень 2021", "Branding", "https://www.behance.net/gallery/127848875/Brand-identity-Enter"]}/>
        </div>
    )
}

function BottomNav(props){;
    return (
        <div className="bottom_nav">
            <div className="nav_button-hover">
                <a href={props.buttonprops[3]} target="_blank">Ознакомиться</a>
            </div>
            <div className="nav_text">
                <p>{props.buttonprops[0]}</p>
                <div><p>{props.buttonprops[1]}</p> <p>{props.buttonprops[2]}</p></div>
            </div>
        </div>
    )
}
function BlockWorks(props){
    const [load, setLoad] = useState(false)
    const [imagesLoaded, setImagesLoaded] = useState('');
    const src = props.propsimage

    useEffect(() => {   
            const img = new Image();
            img.onload = () => {
                setImagesLoaded(src);
                setLoad(true);
            };
            img.src = src;
    }, [props.propsimage]);

    return(
        <div className="myWorks_works" >
            {load ? <img src={imagesLoaded} alt='image'/> :
            <div class="loader">
                <div class="inner one"></div>
                <div class="inner two"></div>
                <div class="inner three"></div>
            </div>}
            <BottomNav buttonprops = {props.buttonProps}/>
        </div>
    )
}

