import { motion } from "motion/react";

export default function NavBar() {
    return (
        <div className="sticky-top z-3" style={{ marginTop: -100 }}>
            <div className="navbar navbar-dark navbar-expand-md container ">
                <div className="navbar-brand text-warning proximaNovaBlack">
                    <a className="nav-link" href="#home">Darío</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navBarCollapse" className="justify-content-around montserratBlack collapse navbar-collapse">

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
                            <a className="nav-link " href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/alejandro+dar%C3%ADo-fuentefr%C3%ADa+or%C3%B3ns/785bb585-5f03-4fad-93a8-ed13bfc74984?view=html">Curriculum</a>
                        </li>
                    </ul>
                </div>
                <a className="navbar-text nav-link" href="https://github.com/dariofo2"><i className=" h4 bi bi-github"></i></a>

            </div>

        </div>
    );
}