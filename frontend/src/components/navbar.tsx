import { motion } from "motion/react";

export default function NavBar () {
    return (
        <div className="position-fixed z-3">
            <div className="navbar navbar-dark navbar-expand-md">
                <div className="navbar-brand">
                    Darío
                </div>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navBarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navBarCollapse" className="montserratblack_a2c7f6b5-module__vidL4G__className navbar-collapse collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-warning">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-warning ">Sobre Mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-warning ">Tecnologías</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-warning ">Lenguajes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-warning ">Curriculum</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}