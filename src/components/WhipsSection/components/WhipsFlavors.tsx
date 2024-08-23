import { FC, useState } from "react";
import WhipsFlavorsData from "../assets/WhipsFlavorsData.json";

interface WhipsFlavorsProps {}

const WhipsFlavors: FC<WhipsFlavorsProps> = () => {
  const [activeWhipsBox, setActiveWhipsBox] = useState("adjika");

  const chooseActiveWhipsBox = (name: string) => {
    setActiveWhipsBox(name);
  };

  return (
    <article className="whips-flavors">
      <h2 className="whips-flavors__title">Вкусы сыровяленных жгутов</h2>
      <div className="whips-flavors__wrap">
        <div className="whips-flavors__img-wrap">
          <img
            src={`/imgs/whips-box/${activeWhipsBox}.webp`}
            alt="коробка с жгутами"
          />
        </div>
        <ul className="whips-flavors__list">
          {WhipsFlavorsData.map((flavor, index) => {
            const isActiveItem = activeWhipsBox === flavor.name;
            return (
              <li
                className={`whips-flavors__item ${
                  isActiveItem ? "active" : ""
                }`}
                key={index}
                onMouseEnter={() => chooseActiveWhipsBox(flavor.name)}
              >
                <a
                  href="https://ozon.ru/t/5MAZEpV"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={flavor.logoImg.src}
                    alt={flavor.logoImg.alt}
                    className="whips-flavors__item-img"
                  />
                  <p className="whips-flavors__item-text">{flavor.text}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default WhipsFlavors;
