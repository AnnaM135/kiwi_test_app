import { Logo } from "../../elements/Logo/Logo";
import { Navbar } from "../Navbar/Navbar";
import _ from "./header.module.scss";
import ModeIcon from "../../assets/images/header/mode.svg";

function Header() {
  return (
    <header className={_._}>
      <div className={`${_.__content} container`}>
        <Logo />
        <Navbar />
        <div className={_.__account}>
          <div className={_.__account_img}>
            <span>D</span>
          </div>
          <img className={_.__account_mode} src={ModeIcon} alt="mode" />
        </div>
      </div>
    </header>
  );
}
export default Header;
