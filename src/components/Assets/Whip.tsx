import { FC } from "react";

interface WhipProps {
  className: string;
}

const Whip: FC<WhipProps> = ({ className }) => {
  return <img src="/imgs/whip.webp" alt="" className={`whip ${className}`} />;
};

export default Whip;
