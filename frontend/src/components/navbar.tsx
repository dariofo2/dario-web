export default function NavBar () {
    return (
        <div>
            <div className="navbar navbar-dark navbar-expand-md bg-dark">
                <div className="navbar-brand">
                    Darío
                </div>
                <button className="navbar-toggler" data-bs-toggle="toggle" data-bs-target="#navBarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navBarCollapse" className="navbar-collapse collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Dario</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Curriculum</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Pages</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}