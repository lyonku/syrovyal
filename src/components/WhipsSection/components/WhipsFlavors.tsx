import { FC, useEffect, useState } from "react";
import { LinksType } from "types";

interface WhipsFlavorsProps {
  openModal: (links: LinksType) => void;
  data: any[];
}

const WhipsFlavors: FC<WhipsFlavorsProps> = ({ openModal, data }) => {
  const [activeWhipsBox, setActiveWhipsBox] = useState("adjika");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data.length >= 1) {
      setActiveWhipsBox(data[currentIndex].name);
    }
  }, [currentIndex, data]);

  const handleMouseEnter = (name: string, index: number) => {
    setActiveWhipsBox(name);
    setCurrentIndex(index);
  };

  return (
    <article className="whips-flavors">
      <h2 className="whips-flavors__title">Вкусы сыровяленных жгутов</h2>
      <div className="whips-flavors__wrap">
        <div className="whips-flavors__img-wrap">
          {data.map((flavor, index) => (
            <img
              key={flavor.name}
              src={`/imgs/whips-box/${flavor.name}.webp`}
              alt="коробка с жгутами"
              className={
                flavor.name === activeWhipsBox
                  ? "whips-flavors__img active"
                  : "whips-flavors__img"
              }
              style={{
                display: flavor.name === activeWhipsBox ? "block" : "none",
              }}
            />
          ))}
        </div>
        <ul className="whips-flavors__list">
          {data.map((flavor, index) => {
            const isActiveItem = activeWhipsBox === flavor.name;
            return (
              <li
                className={`whips-flavors__item ${
                  isActiveItem ? "active" : ""
                }`}
                key={index}
                onMouseEnter={() => handleMouseEnter(flavor.name, index)}
                onClick={() => openModal(flavor.links)}
              >
                <img
                  src={flavor.logoImg.src}
                  alt={flavor.logoImg.alt}
                  className="whips-flavors__item-img"
                />
                <p className="whips-flavors__item-text">{flavor.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default WhipsFlavors;
