import { FC } from "react";
import BalykData from "./assets/BalykData.json";
import "./BalykSection.scss";
interface BalykSectionProps {}

const BalykSection: FC<BalykSectionProps> = () => {
  return (
    <section className="balyk-section">
      <h2 className="balyk-section__title">Балык - свиные чипсы</h2>
      <ul className="balyk-section__list">
        {BalykData.map((balyk, index) => {
          return (
            <li className="balyk-section__item" key={index}>
              <a
                href={balyk.links.ozon}
                target="_blank"
                rel="noreferrer"
                className="balyk-section__link"
              >
                <img
                  src={balyk.img.src}
                  alt=""
                  className="balyk-section__item-img"
                />
                <p className="balyk-section__item-title">{balyk.title}</p>
                <p className="balyk-section__item-desc">{balyk.desc}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BalykSection;
