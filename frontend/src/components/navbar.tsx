import { motion } from "motion/react";

export default function NavBar () {
    return (
        <div>
            <div className="navbar navbar-dark navbar-expand-md bg-dark">
                <div className="navbar-brand">
                    Darío
                </div>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navBarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navBarCollapse" className="navbar-collapse collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Sobre Mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Tecnologías</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Lenguajes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Curriculum</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}