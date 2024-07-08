import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="navbar p-3 bg-gradient-to-r from-sky-200 from-10% via-sky-300 via-30% to-emerald-200 to-90% shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gradient-to-r from-sky-100 from-10% via-sky-100 via-30% to-emerald-50 to-90% rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/form">Rotas</Link>
            </li>
            <li>
              <Link to="/users">Usuários</Link>
            </li>
            <li>
              <Link to="/settings">Configurações</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/form">
          <a className="btn btn-ghost text-xl"> GUILHERME A</a>
        </Link>
      </div>
      <div className="navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
