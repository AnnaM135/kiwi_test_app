import _ from "./logo.module.scss";
import LogoImg from "../../assets/images/logo.svg";

export function Logo() {
  return (
    <a className={_._} href="/">
      <img className={_.__img} src={LogoImg} alt="Cointrackai Logo" />
    </a>
  );
}
