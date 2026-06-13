import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="site-map">
            <Link to="/">Home</Link>
            <Link to="/commands">Commands</Link>
            <Link to="/distros">Distros</Link>
            <Link to="/filesystem">Filesystem</Link>
        </nav>
    );
}

export default Navbar