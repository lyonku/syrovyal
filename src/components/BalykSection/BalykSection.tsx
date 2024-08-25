import { FC } from "react";
import BalykData from "./assets/BalykData.json";
import "./BalykSection.scss";
import Sausage from "components/Assets/Sausage";
import Whip from "components/Assets/Whip";
import Spice from "components/Assets/Spice";
import Spices from "components/Assets/Spices";
import { LinksType } from "types";
interface BalykSectionProps {
  openModal: (links: LinksType) => void;
}

const BalykSection: FC<BalykSectionProps> = ({ openModal }) => {
  return (
    <section className="balyk-section" id="balyk">
      <div className="balyk-section__wrap">
        <h2 className="balyk-section__title">Балык - свиные чипсы</h2>
        <ul className="balyk-section__list">
          {BalykData.map((balyk, index) => {
            return (
              <li
                className="balyk-section__item"
                key={index}
                onClick={() => openModal(balyk.links)}
              >
                <img
                  src={balyk.img.src}
                  alt=""
                  className="balyk-section__item-img"
                />
                <p className="balyk-section__item-title">{balyk.title}</p>
                <p className="balyk-section__item-desc">{balyk.desc}</p>
              </li>
            );
          })}
        </ul>
        <Sausage className="balyk-section__sausage_right-bottom" />
        <Whip className="balyk-section__whip_right-top" />
        <Spices className="balyk-section__spices_right-center" />
        <Spice className="balyk-section__spice_left-top" type="3" />
        <Spice className="balyk-section__spice_left-bottom" type="3" />
      </div>
    </section>
  );
};

export default BalykSection;
