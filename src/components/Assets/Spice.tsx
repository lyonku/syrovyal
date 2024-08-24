import { FC } from "react";

interface SpiceProps {
  type: "1" | "2" | "3";
  className: string;
}

const Spice: FC<SpiceProps> = ({ type, className }) => {
  return (
    <img
      src={`/imgs/spices-${type}.webp`}
      alt=""
      className={`spice ${className}`}
    />
  );
};

export default Spice;
