import mainsite from '../../sourse/image/mainsite.jpg'
import lending from '../../sourse/image/lending.jpg'
import prototype from '../../sourse/image/prototipe.jpg'
import sptekhnolog1 from '../../sourse/image/sp-tekhnolog1.png'
import sptekhnolog2 from '../../sourse/image/sp-tekhnolog2.png'
import sptekhnolog3 from '../../sourse/image/sp-tekhnolog3.png'
import xMockup from '../../sourse/image/X-Mockup.png'
import bigMobPortfolio from '../../sourse/image/big-mobile-portfolio.png'
import mobilePortfolio1 from '../../sourse/image/mobile-portfolio.png'
import mobilePortfolio2 from '../../sourse/image/mobile-portfolio2.png'
import mobilePortfolio3 from '../../sourse/image/mobile-portfolio3.png'
import kards from '../../sourse/image/kards.png'
import enter from '../../sourse/image/enter.png'

export default function MyWorks(){
    return(
        <div className="myWorks" id='work'>
               <div className="myWorks_works">
                    <img src={mainsite} alt="" /><img src={mainsite} alt="" /><img src={mainsite} alt="" />
                    <BottomNav name="KREPKO Premium" season="Зима 2021" types="Landing Page"/>
                </div> 
                <div className="myWorks_works">
                    <img src={prototype} alt="" /><img src={lending} alt="" />
                    <BottomNav name="Local Express" season="Зима 2021" types="Landing Page"/>
                </div> 
                <div className="myWorks_works">
                    <img src={sptekhnolog1} alt="" /><img src={sptekhnolog2} alt="" /><img src={sptekhnolog3} alt="" />
                    <BottomNav name="СП-Технологии" season="Лето 2021" types="Landing Page"/>
                </div> 
                 <div className="myWorks_works">
                    <img src={xMockup} alt="" />
                    <BottomNav name="KREPKO" season="Зима 2021" types="UI/UX"/>
                </div> 
                 <div className="myWorks_works">
                    <img src={mobilePortfolio1} alt="" /><img src={mobilePortfolio2} alt="" /><img src={bigMobPortfolio} alt="" /><img src={mobilePortfolio3} alt="" />
                    <BottomNav name="MaysLab" season="Лето 2021" types="Landing Page"/>
                </div> 
                <div className="myWorks_works">
                    <img src={kards} alt="" />
                    <BottomNav name="Katit " season="Осень 2021" types="Branding"/>
                </div> 
                <div className="myWorks_works">
                    <img src={enter} alt="" />
                    <BottomNav name="Enter Digital" season="Осень 2021" types="Branding"/>
                </div> 
        </div>
    )
}

function BottomNav(props){
    return (
        <div className="bottom_nav">
            <div className="nav_button-hover">
                <a href="">Ознакомиться</a>
            </div>
            <div className="nav_text">
                <p>{props.name}</p>
                <div><p>{props.season}</p> <p>{props.types}</p></div>
            </div>
        </div>
    )
}

