import { FC } from "react";
import "./Footer.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__info">
          <img src="/imgs/syrovyal-logo.svg" alt="логотип сыровяла" />
          <div className="footer__links" aria-label="ссылки на социальные сети">
            <a
              href="https://www.youtube.com/@orion_mhp"
              target="_blank"
              rel="noreferrer"
              className="footer__link footer__link_youtube"
              aria-label="ссылка на youtube"
            >
              <img
                src="/imgs/youtube.svg"
                alt=""
                className="footer__link-img"
              />
            </a>
            <a
              href="https://vk.com/ooo_orion"
              target="_blank"
              rel="noreferrer"
              className="footer__link footer__link_vk"
              aria-label="ссылка на vk"
            >
              <img src="/imgs/vk.svg" alt="" className="footer__link-img" />
            </a>
          </div>
        </div>
        <div className="footer__contacts">
          <p className="footer__contacts-title">Контакты</p>
          <ul className="footer__contacts-list">
            <li className="footer__contacts-item">
              <a
                href="mailto:orion.sozvezdiye@mail.ru"
                className="footer__contacts-item-link"
              >
                <img
                  src="/imgs/mail.svg"
                  alt=""
                  className="footer__contacts-item-img"
                />
                <span className="footer__contacts-text">
                  orion.sozvezdiye@mail.ru
                </span>
              </a>
            </li>
            <li className="footer__contacts-item">
              <a href="tel:+78655320623" className="footer__contacts-item-link">
                <img
                  src="/imgs/phone.svg"
                  alt=""
                  className="footer__contacts-item-img"
                />
                <span className="footer__contacts-text">8 (86553) 2-06-23</span>
              </a>
            </li>
            <li className="footer__contacts-item">
              <a
                href="https://maps.app.goo.gl/fBUy4XEaKPvB2x2i6"
                className="footer__contacts-item-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/imgs/address.svg"
                  alt=""
                  className="footer__contacts-item-img"
                />
                <span className="footer__contacts-text">
                  Ставропольский край, c.Верхнерусское, проезд Восточный, 6
                </span>
              </a>
            </li>
            <li className="footer__contacts-item">
              <a
                href="http://snacks26.ru"
                target="_blank"
                rel="noreferrer"
                className="footer__contacts-item-link"
              >
                <img
                  src="/imgs/website.svg"
                  alt=""
                  className="footer__contacts-item-img"
                />
                <span className="footer__contacts-text">
                  http://snacks26.ru
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
