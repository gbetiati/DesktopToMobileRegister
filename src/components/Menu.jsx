import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="navbar p-3 sticky top-0 z-50 bg-gradient-to-r from-blue-700 from-10% via-sky-600 via-30% to-blue-900 to-90% shadow-md">
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
            className="menu menu-sm dropdown-content bg-slate-100 rounded-box z-[1] mt-3 w-52 p-2 space-y-1.5 shadow"
          >
            <li>
              <Link to="/form">Cadastrar rota</Link>
            </li>
            <li>
              <Link to="/users">Usuários</Link>
            </li>
            <li>
              <Link to="/RoutesListScreen">Rotas</Link>
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
