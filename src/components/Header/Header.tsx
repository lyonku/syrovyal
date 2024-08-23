import { FC } from "react";
import "./Header.scss";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="header">
      <img
        src="/imgs/syrovyal-logo.svg"
        alt="логотип сыровял"
        className="header__logo"
      />
      <nav className="header__nav" aria-label="Навигация по сайту">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#whips">Жгуты</a>
          </li>
          <li className="header__nav-item">
            <a href="#mini-sausages">Мини колбаски</a>
          </li>
          <li className="header__nav-item">
            <a href="#balyk">Балык</a>
          </li>
          <li className="header__nav-item">
            <a href="#chicken-chips">Отзывы</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
