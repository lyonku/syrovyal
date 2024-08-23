import { FC } from "react";
import "./StartSection.scss";
import MemoOzon from "components/Assets/Ozon";
import MemoWildberries from "components/Assets/Wildberries";

interface StartSectionProps {}

const StartSection: FC<StartSectionProps> = () => {
  const advantagesMass = [
    { img: { src: "/imgs/time.png", alt: "" }, text: "Быстрый перекус" },
    { img: { src: "/imgs/beers.png", alt: "" }, text: "Идеально к пенному" },
    {
      img: { src: "/imgs/handshake.png", alt: "" },
      text: "В компании с друзьями",
    },
    { img: { src: "/imgs/gift.png", alt: "" }, text: "Оригинальный подарок" },
  ];

  // const advantagesMass = [
  //   { img: { src: "/imgs/time.svg", alt: "" }, text: "Быстрый перекус" },
  //   { img: { src: "/imgs/beer.svg", alt: "" }, text: "Идеально к пенному" },
  //   {
  //     img: { src: "/imgs/friends.svg", alt: "" },
  //     text: "В компании с друзьями",
  //   },
  //   { img: { src: "/imgs/gift.svg", alt: "" }, text: "Оригинальный подарок" },
  // ];

  return (
    <section className="start-section">
      <h1 className="start-section__title">ПРЕМИАЛЬНЫЕ МЯСНЫЕ СНЕКИ</h1>
      <div className="start-section__info-block">
        <div
          className="start-section__img-wrap"
          aria-label="На заднем фоне изображение - стол с мясными жгутами, перцем и солью"
        >
          <div className="start-section__img-wrap-content">
            <p>
              Сыровял - это разнообразие видов и вкусов премиальных сыровяленных
              мясных снеков
            </p>
          </div>
        </div>
        <ul className="start-section__advantages-list">
          {advantagesMass.map((advantage, index) => {
            return (
              <li className="start-section__advantages-item" key={index}>
                <img
                  src={advantage.img.src}
                  alt={advantage.img.alt}
                  className="start-section__advantages-item-img"
                />
                <p className="start-section__advantages-item-text">
                  {advantage.text}
                </p>
              </li>
            );
          })}
        </ul>
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
          <MemoWildberries gradientId="start-section-gradient" />
        </a>
      </div>
    </section>
  );
};

export default StartSection;
