import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (                                         
    <div className="navbar p-3 sticky top-0 z-50 rounded-b-xl opacity-95 bg-gradient-to-b from-slate-900 to-blue-500 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 22 22"
              stroke="white"
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
          <a className="btn btn-ghost font-bold text-white text-2xl" > XXX </a>
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal bg-base-200 rounded-box">
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <a className="font font-semibold text-white">
              Stats
            </a>
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            <a className="font font-semibold text-white">Updates</a>
            </a>
          </li>
          <li>
            <a className="font font-semibold text-white">
              Stats
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
