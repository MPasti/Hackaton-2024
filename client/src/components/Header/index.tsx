import { Flame, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import imgLogo from "../../assets/logo-happiology.png";
import { logout } from "../../auth/Auth.ts";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar fixed bg-base-100 drop-shadow-lg">
          <label
            htmlFor="my-drawer"
            className="btn btn-square btn-ghost drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <Link className="flex-1" to="/">
            <img src={imgLogo} alt="Logo" className="pl-10 w-80 h-auto" />
          </Link>
          <div className="flex-none gap-2">
            <label className="swap swap-rotate me-5">
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side z-[9999]">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 bg-white">
          <div className="flex">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="rounded-full avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Imagem de Perfil"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="ms-5 text-xl">
                Olá, <span className="font-bold">Matheus</span>
              </p>
              <div className="ms-5 gap-1 flex text-lg">
                <p>Streak</p>
                <Flame size={24} />
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
          <li>
            <a>Relações</a>
          </li>
          <li>
            <Link to="/desempenho">Desempenho</Link>
          </li>
          <li>
            <Link to="/atividades">Atividades</Link>
          </li>
          <li>
            <Link to="/meu-diario">Meu Diário</Link>
          </li>
          <li>
            <Link to="/formulario">Questionário</Link>
          </li>
        </ul>
        <a
          className="flex mt-auto mb-3.5 ps-2 cursor-pointer"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          <LogOut />
          <p className="ms-2 ms-2">Sair</p>
        </a>
      </div>
    </div>
  );
};
