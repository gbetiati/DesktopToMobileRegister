import React from "react"
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
    <>
    <div className="shadow-xl">
    <ul className="menu bg-slate-300 w-56 p-4 h-screen">
    <li className="menu-title text-3xl text-black text-left mb-4">Navegação</li>
      <li><Link to="/form">Rotas</Link></li>
      <li><Link to="/store">Usuários</Link></li>
      <li><Link to="/store">Configurações</Link></li> 
    </ul>
    </div>
    </>
    )
}

export default Menu