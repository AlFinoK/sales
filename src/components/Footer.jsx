import logo from '../assets/icons/logo.svg'
import inst from '../assets/icons/inst.svg'
import whatsapp from '../assets/icons/whatsapp.svg'
import youtube from '../assets/icons/youtube.svg'
import telegram from '../assets/icons/telegram.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <img className="footer-top__logo" src={logo} alt="logo" />
                    <ul className="footer-top__list">
                        <li>
                            <a
                                target="_blank"
                                href="https://developer.mozilla.org/ru/"
                                className="footer-top__list-link">
                                Услуги
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://developer.mozilla.org/ru/"
                                className="footer-top__list-link">
                                Кейсы
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://developer.mozilla.org/ru/"
                                className="footer-top__list-link">
                                Клиенты
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://developer.mozilla.org/ru/"
                                className="footer-top__list-link">
                                Контакты
                            </a>
                        </li>
                    </ul>
                    <div className="footer-top__links">
                        <a
                            target="_blank"
                            href="https://developer.mozilla.org/ru/"
                            className="footer-top__link">
                            <img src={inst} alt="instagram" />
                        </a>
                        <a
                            target="_blank"
                            href="https://developer.mozilla.org/ru/"
                            className="footer-top__link">
                            <img src={whatsapp} alt="whatsapp" />
                        </a>
                        <a
                            target="_blank"
                            href="https://developer.mozilla.org/ru/"
                            className="footer-top__link">
                            <img src={youtube} alt="youtube" />
                        </a>
                        <a
                            target="_blank"
                            href="https://developer.mozilla.org/ru/"
                            className="footer-top__link">
                            <img src={telegram} alt="telegram" />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-bottom__c">2023 | Yellow day </p>
                    <p className="footer-bottom__rights">Все права защищены</p>
                </div>
            </div>
        </footer>
    )
}
