import { FC } from "react";

interface SpicesProps {
  className: string;
}

const Spices: FC<SpicesProps> = ({ className }) => {
  return (
    <img src="/imgs/spices.webp" alt="" className={`spices ${className}`} />
  );
};

export default Spices;
