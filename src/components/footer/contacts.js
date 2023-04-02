import strelka from '../../sourse/image/strelka.svg'

export default function Contact(){
    return(
        <div className="contacts">
            <div className="contacts_text">
                <p>КОНТАКТЫ</p>
            </div>
            <div className="contacts-links">
                <div className="contacts-links_link">
                    <a href="">mayslab.br@gmail.com</a>
                    <a href="">Telegram <img src={strelka} alt="" /></a>
                    <a href="">Behance <img src={strelka} alt="" /></a>
                    <a href="">Instagram <img src={strelka} alt="" /></a>
                </div>
            </div>
        </div>
    )
}