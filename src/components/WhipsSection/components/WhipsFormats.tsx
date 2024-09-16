import { FC } from "react";
import { LinksType } from "types";

interface WhipsFormatsProps {
  openModal: (links: LinksType) => void;
  data: any[];
}

const WhipsFormats: FC<WhipsFormatsProps> = ({ openModal, data }) => {
  return (
    <article className="whips-formats">
      <h2 className="whips-formats__title">Форматы жгутов</h2>
      <ul className="whips-formats__list">
        {data.map((format, index) => {
          return (
            <li
              className="whips-formats__item"
              key={index}
              onClick={() => openModal(format.links)}
            >
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
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default WhipsFormats;
