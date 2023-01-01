import { TopTitle } from "../../elements/TopTitle/TopTitle";
import Days from "../Days/Days";
import _ from "./coins.module.scss";

export function Coins() {
  return (
    <div className={_._}>
      <TopTitle title="Coins" />
      <Days>
        <div className={_.__circle}>
          <div className={`${_.__circle_top} ${_.__center}`}>
            <span>TOP <span style={{color: '#61E224'}}>Gainer</span></span>
            <span>Apecoin</span>
            <span className={_.__circle_icon_gainer}>0.74%</span>
          </div>
          <div className={_.__circle_wave}></div>
          <div className={`${_.__circle_bottom} ${_.__center}`}>
            <span>TOP <span style={{color: '#D23737'}}>Looser</span> </span>
            <span>Apecoin</span>
            <span className={_.__circle_icon_looser}>0.74%</span>
          </div>
        </div>
      </Days>
    </div>
  );
}
