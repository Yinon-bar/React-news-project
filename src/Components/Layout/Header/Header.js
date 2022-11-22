import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Container">
        <div className="logo">
          <h1>Yinon Bar News</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
