import { ReactComponent as GithubIcon } from 'assets/img/Vector.svg';
import './stelys.css';

function Navbar() {

    return (
        <header>
            <nav className= "container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/joaopaulolima-git">
                        <div className="dsmovie-contact-conteiner">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/Jpdev</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;