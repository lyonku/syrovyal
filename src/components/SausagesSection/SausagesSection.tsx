import { FC } from "react";
import "./SausagesSection.scss";
import SausagesData from "./assets/SausagesData.json";

interface SausagesSectionProps {}

const SausagesSection: FC<SausagesSectionProps> = () => {
  return (
    <section className="sauseges-section">
      <h2 className="sauseges-section__title">Мини колбаски с макси вкусом</h2>
      <ul className="sauseges-section__list">
        {SausagesData.map((sausage, index) => {
          return (
            <li className="sauseges-section__item" key={index}>
              <a
                href={sausage.links.ozon}
                target="_blank"
                rel="noreferrer"
                className="sauseges-section__link"
              >
                <img
                  src={sausage.img.src}
                  alt=""
                  className="sauseges-section__item-img"
                />
                <p className="sauseges-section__item-title">{sausage.title}</p>
                <p className="sauseges-section__item-desc">{sausage.desc}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SausagesSection;
