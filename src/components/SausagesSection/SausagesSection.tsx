import { FC } from "react";
import "./SausagesSection.scss";
import SausagesData from "./assets/SausagesData.json";
import Sausage from "components/Assets/Sausage";
import Whip from "components/Assets/Whip";
import Spice from "components/Assets/Spice";
import { LinksType } from "types";

interface SausagesSectionProps {
  openModal: (links: LinksType) => void;
}

const SausagesSection: FC<SausagesSectionProps> = ({ openModal }) => {
  return (
    <section className="sauseges-section" id="mini-sausages">
      <div className="sauseges-section__wrap">
        <h2 className="sauseges-section__title">
          Мини колбаски с макси вкусом
        </h2>
        <ul className="sauseges-section__list">
          {SausagesData.map((sausage, index) => {
            return (
              <li
                className="sauseges-section__item"
                key={index}
                onClick={() => openModal(sausage.links)}
              >
                <img
                  src={sausage.img.src}
                  alt=""
                  className="sauseges-section__item-img"
                />
                <p className="sauseges-section__item-title">{sausage.title}</p>
                <p className="sauseges-section__item-desc">{sausage.desc}</p>
              </li>
            );
          })}
        </ul>
        <Sausage className="sauseges-section__sausage_left-bottom" />
        <Sausage className="sauseges-section__sausage_right-top" />
        <Whip className="sauseges-section__whip_left-top" />
        <Spice className="sauseges-section__spice_right-center" type="3" />
        <Spice className="sauseges-section__spice_center-top" type="2" />
      </div>
    </section>
  );
};

export default SausagesSection;
