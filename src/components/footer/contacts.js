import strelka from '../../sourse/image/strelka.svg'
import { useSelector } from 'react-redux';

export default function Contact(){
    const darkMode = useSelector((state) => state.counter.value)

    return(
        <div className={ darkMode ? "contacts dark": "contacts"} id='contacts'>
            <div className="contacts_text">
                <p>КОНТАКТЫ</p>
            </div>
            <div className="contacts-links">
                <div className={ darkMode ? "contacts-links_link dark" : "contacts-links_link"}>
                    <a href="mailto:mayslab.br@gmail.com" target="_blank">mayslab.br@gmail.com</a>
                    <a href="https://t.me/mayslab" target="_blank">Telegram <img src={strelka} alt="" /></a>
                    <a href="https://www.behance.net/mayslab" target="_blank">Behance <img src={strelka} alt="" /></a>
                    <a href="http://instagram.com/_u/mayslabs/" target="_blank">Instagram <img src={strelka} alt="" /></a>
                </div>
            </div>
        </div>
    )
}