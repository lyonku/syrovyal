import { FC } from "react";
import "./LastSection.scss";
import MemoOzon from "components/Assets/Ozon";
import MemoWildberries from "components/Assets/Wildberries";

interface LastSectionProps {}

const LastSection: FC<LastSectionProps> = () => {
  return (
    <section className="last-section">
      <div className="last-section__wrap">
        <div className="last-section__info-wrap">
          <h2 className="last-section__title">Выбирай лучшее, выбирай нас!</h2>
          <ul className="last-section__list">
            <li className="last-section__item">
              <img
                src="/imgs/meat.svg"
                alt=""
                className="last-section__item-img"
              />
              <p className="last-section__item-text">Высшие сорта мяса</p>
            </li>
            <li className="last-section__item">
              <img
                src="/imgs/temperature.svg"
                alt=""
                className="last-section__item-img"
              />
              <p className="last-section__item-text">
                Не требуют холодильника
                <br />
                <span>от 0 до 24°C</span>
              </p>
            </li>
            <li className="last-section__item">
              <img
                src="/imgs/calendar.svg"
                alt=""
                className="last-section__item-img"
              />
              <p className="last-section__item-text">
                Длительный срок хранения
                <br />
                <span>до 90 суток</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="last-section__img-wrap">
          <img src="/imgs/whips-demonstration.webp" alt="" />
        </div>
      </div>
      <div className="start-section__links">
        <a
          href="https://www.ozon.ru/seller/syrovyal-1142892"
          target="_blank"
          rel="noreferrer"
          className="start-section__link start-section__link-ozon"
          aria-label="Ссылка на озон"
        >
          <MemoOzon />
        </a>
        <a
          href="https://www.wildberries.ru/seller/3976380"
          target="_blank"
          rel="noreferrer"
          className="start-section__link start-section__link-wildberries"
          aria-label="Ссылка на вайлбериз"
        >
          <MemoWildberries gradientId="last-section-gradient" />
        </a>
      </div>
    </section>
  );
};

export default LastSection;
