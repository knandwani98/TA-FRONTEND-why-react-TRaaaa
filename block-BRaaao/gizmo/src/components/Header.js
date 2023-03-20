function Header() {
  return (
    <header className="main-header">
      <div className="container flex">
        <a className="logo" href="">
          Logo
        </a>
        <ul className="nav-menu flex f-gap">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
