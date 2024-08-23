import { FC } from "react";

import "./WhipsSection.scss";
import WhipsFlavors from "./components/WhipsFlavors";
import WhipsFormats from "./components/WhipsFormats";

interface WhipsSectionProps {}

const WhipsSection: FC<WhipsSectionProps> = () => {
  return (
    <section className="whips-section">
      <h2 className="visibility-hidden">Жгуты</h2>
      <img
        src="/imgs/whips-logo.svg"
        className="whips-section__logo"
        alt="надпись жгуты, в огне, логотип"
      />
      <WhipsFormats />
      <WhipsFlavors />
    </section>
  );
};

export default WhipsSection;
