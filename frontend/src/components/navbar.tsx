import { motion } from "motion/react";

export default function NavBar() {
    return (
        <div className="sticky-top z-3" style={{ marginTop: -100 }}>
            <div className="navbar navbar-dark navbar-expand-md container d-flex">
            <div className="navbar-brand text-warning proximanovablack_aad6772e-module__21-Dpq__className">
                    <a className="nav-link" href="#home">Darío</a>
                </div>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navBarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navBarCollapse" className="justify-content-around montserratblack_a2c7f6b5-module__vidL4G__className navbar-collapse collapse">
                
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutMe">Sobre Mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tecnologias">Tecnologías</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#tecnologias">Lenguajes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="https://europa.eu/europass/eportfolio/screen/profile?profileId=6653543c2da26e42226d94aa&lang=en">Curriculum</a>
                        </li>
                    </ul>
                </div>
                <a className="nav-link" href="https://github.com/dariofo2"><i className=" h4 bi bi-github"></i></a>

            </div>
        </div>
    );
}