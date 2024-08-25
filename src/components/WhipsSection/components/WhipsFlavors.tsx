import { FC, useEffect, useState } from "react";
import WhipsFlavorsData from "../assets/WhipsFlavorsData.json";
import { LinksType } from "types";

interface WhipsFlavorsProps {
  openModal: (links: LinksType) => void;
}

const WhipsFlavors: FC<WhipsFlavorsProps> = ({ openModal }) => {
  const [activeWhipsBox, setActiveWhipsBox] = useState("adjika");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % WhipsFlavorsData.length
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  useEffect(() => {
    setActiveWhipsBox(WhipsFlavorsData[currentIndex].name);
  }, [currentIndex]);

  const handleMouseEnter = (name: string, index: number) => {
    setIsHovered(true);
    setActiveWhipsBox(name);
    setCurrentIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <article className="whips-flavors">
      <h2 className="whips-flavors__title">Вкусы сыровяленных жгутов</h2>
      <div className="whips-flavors__wrap">
        <div className="whips-flavors__img-wrap">
          {WhipsFlavorsData.map((flavor, index) => (
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
          {WhipsFlavorsData.map((flavor, index) => {
            const isActiveItem = activeWhipsBox === flavor.name;
            return (
              <li
                className={`whips-flavors__item ${
                  isActiveItem ? "active" : ""
                }`}
                key={index}
                onMouseEnter={() => handleMouseEnter(flavor.name, index)}
                onMouseLeave={handleMouseLeave}
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
