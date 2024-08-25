import { FC } from "react";
import WhipsFormatsData from "../assets/WhipsFormatsData.json";

interface WhipsFormatsProps {}

const WhipsFormats: FC<WhipsFormatsProps> = () => {
  return (
    <article className="whips-formats">
      <h2 className="whips-formats__title">Форматы жгутов</h2>
      <ul className="whips-formats__list">
        {WhipsFormatsData.map((format, index) => {
          return (
            <li className="whips-formats__item" key={index}>
              <a href={format.links.ozon} target="_blank" rel="noreferrer">
                <img
                  src={format.img.src}
                  alt={format.img.alt}
                  className="whips-formats__item-img"
                />
                <div>
                  <p className="whips-formats__item-title">{format.title}</p>
                  <hr className="whips-formats__item-hr" />
                  <p className="whips-formats__item-desc">{format.desc}</p>
                  <p className="whips-formats__item-size">{format.size}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default WhipsFormats;
