import { Link } from "react-router-dom"

function Nav() {
    return (
      <div>
        <aside  className="sidenav">
        <ul className="nav nav-tabs ">
      <li className="nav-item enlarge-image">
      <Link to="/" style={{ textShadow: '2px 2px 4px #000000', color: 'white', fontSize: '20px' }}>About</Link>
      </li>
      <li className="nav-item enlarge-image">
      <Link to="/Portfolio" style={{ textShadow: '2px 2px 4px #000000', color: 'white', fontSize: '20px' }}>Portfolio</Link>
      </li>
      <li className="nav-item enlarge-image">
      <Link to="/Contact" style={{ textShadow: '2px 2px 4px #000000', color: 'white', fontSize: '20px' }}>Contact</Link>
      </li>
      <li className="nav-item enlarge-image">
      <Link to="/Resume" style={{ textShadow: '2px 2px 4px #000000', color: 'white', fontSize: '20px' }}>Resume</Link>
      </li>
    </ul>
     </aside>
      </div>
    );
  }
  export default Nav