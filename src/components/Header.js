import "../Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <header className="header">
      <div>this is the header</div>
      <div className="header__left">
        {/* linkedIn logo */}
        <img src="./images/linkedin.svg" alt="linkedin logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right"></div>
    </header>
  );
}

export default Header;
