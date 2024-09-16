import { FC, useEffect, useState } from "react";

import "./WhipsSection.scss";
import WhipsFlavors from "./components/WhipsFlavors";
import WhipsFormats from "./components/WhipsFormats";
import Sausage from "components/Assets/Sausage";
import Spices from "components/Assets/Spices";
import Whip from "components/Assets/Whip";
import Spice from "components/Assets/Spice";
import { LinksType } from "types";

interface WhipsSectionProps {
  openModal: (links: LinksType) => void;
}

const WhipsSection: FC<WhipsSectionProps> = ({ openModal }) => {
  const [WhipsFlavorsData, setWhipsFlavorsData] = useState([]);
  const [WhipsFormatsData, setWhipsFormatsData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/WhipsFlavorsData.json`)
      .then((response) => response.json())
      .then((jsonData) => setWhipsFlavorsData(jsonData))
      .catch((error) => console.error("Error loading JSON:", error));

    fetch(`${process.env.PUBLIC_URL}/WhipsFormatsData.json`)
      .then((response) => response.json())
      .then((jsonData) => setWhipsFormatsData(jsonData))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <section className="whips-section" id="whips">
      <div className="whips-section__wrap">
        <h2 className="visibility-hidden">Жгуты</h2>
        <img
          src="/imgs/whips-logo.svg"
          className="whips-section__logo"
          alt="надпись жгуты, в огне, логотип"
        />
        <WhipsFormats openModal={openModal} data={WhipsFormatsData} />
        <WhipsFlavors openModal={openModal} data={WhipsFlavorsData} />
        <Sausage className="whips-section__sausage_left-top" />
        <Sausage className="whips-section__sausage_left-center" />
        <Sausage className="whips-section__sausage_right-bottom" />
        <Spices className="whips-section__spices_right-top" />
        <Spices className="whips-section__spices_left-bottom" />
        <Whip className="whips-section__whip_left-top" />
        <Whip className="whips-section__whip_left-top-2" />
        <Whip className="whips-section__whip_right-center" />
        <Spice className="whips-section__spice_right-top" type="3" />
        <Spice className="whips-section__spice_right-bottom" type="3" />
        <Spice className="whips-section__spice_left-bottom" type="3" />
        <Spice className="whips-section__spice_right-center" type="2" />
        <Spice className="whips-section__spice_left-top" type="1" />
      </div>
    </section>
  );
};

export default WhipsSection;
