import Link from "next/link";
import React from "react";

import { universeImage } from "../../consts/config";

const Menu = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" href="/">
      <img alt="" src={universeImage} width="96px" />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-item nav-link" href="/">
          Главная
        </Link>
        <div className="dropdown">
          <Link
            href="#"
            className="dropdown-toggle nav-item nav-link"
            data-toggle="dropdown"
          >
            Экспозиция <b className="caret"></b>
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="nav-item nav-link" href="/rectors">
                Руководители
              </Link>
            </li>
            <li>
              <Link className="nav-item nav-link" href="/exhibits/1">
                Выставочный зал
              </Link>
            </li>
          </ul>
        </div>
        <Link className="nav-item nav-link" href="/about">
          Справка
        </Link>
      </div>
    </div>
  </nav>
);

export default Menu;
