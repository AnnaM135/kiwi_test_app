import { LineChart } from "../Charts/LineChart";
import _ from "./totalPoints.module.scss";
import ArrowDownIcon from "../../assets/images/arrow-down.svg";
import MinimazeIcon from "../../assets/images/minimize-icon.svg";
import PlusIcon from "../../assets/images/plus-icon.svg";
import ZoomInIcon from "../../assets/images/zoom-in.svg";
import HomeIcon from "../../assets/images/home.svg";
import HandIcon from "../../assets/images/hand-icon.svg";

export function TotalPoints() {
  return (
    <div className={_._}>
      <div className={_.__top}>
        <div className={_.__top_selects}>
          <h4>Total Points</h4>
          <div className={_.__top_select}>
            <span>All</span>
            <img
              className={_.__top_select_arrow}
              src={ArrowDownIcon}
              alt="Arrow Down Icon"
            />
          </div>
          <div className={_.__top_select}>
            <span>1 year</span>
            <img
              className={_.__top_select_arrow}
              src={ArrowDownIcon}
              alt="Arrow Down Icon"
            />
          </div>
        </div>
        <span className={_.__top_more}>See more</span>
      </div>
      <div className={_.__icons}>
        <img className={_.__icon} src={MinimazeIcon} alt="chart line icon" />
        <img className={_.__icon} src={PlusIcon} alt="chart line icon" />
        <img className={_.__icon} src={ZoomInIcon} alt="chart line icon" />
        <img className={_.__icon} src={HomeIcon} alt="chart line icon" />
        <img className={_.__icon} src={HandIcon} alt="chart line icon" />
      </div>
      <LineChart />
      <div className={_.__currency}>
        <div className={_.__currency_box}>
          <input
            className={_.__currency_checkbox}
            type="checkbox"
            checked
            id="USD"
            onChange={(e) => e.target.value}
          />
          <label htmlFor="USD" id="1">
            USD
          </label>
          <input
            className={_.__currency_checkbox}
            type="checkbox"
            id="BTC"
            onChange={(e) => e.target.value}
          />
          <label htmlFor="BTC" id="2">
            BTC
          </label>
          <input
            className={_.__currency_checkbox}
            type="checkbox"
            id="ETH"
            onChange={(e) => e.target.value}
          />
          <label htmlFor="ETH" id="3">
            ETH
          </label>
        </div>
      </div>
    </div>
  );
}
