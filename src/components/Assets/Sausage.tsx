import { FC } from "react";

interface SausageProps {
  className: string;
}

const Sausage: FC<SausageProps> = ({ className }) => {
  return (
    <img src="/imgs/sausage.webp" alt="" className={`sausage ${className}`} />
  );
};

export default Sausage;
