import { TopTitle } from "../../elements/TopTitle/TopTitle";
import { AreaChart } from "../Charts/AreaChart";
import _ from "./futures.module.scss";
import greenIcon from "../../assets/images/futures_green.svg";
import redIcon from "../../assets/images/futures_red.svg";

export function Futures() {
  return (
    <div className={_._}>
      <TopTitle title="Futures" />
      <div className={_.__score}>
        <div className={_.__score_data}>
          <span className={_.__score_date}>3/22/2022 </span>
          <div className={_.__score_goal}>
            <div className={_.__score_goal_price}>
              <img src={greenIcon} alt="icon" />
              <span>$0.74</span>
            </div>
            <div className={_.__score_goal_percent}>
              <img src={redIcon} alt="icon" />
              <span>0.58%</span>
            </div>
          </div>
        </div>
        <div className={_.__score_total}>$3,698.58</div>
      </div>
      <div className={_.__chart}>
        <AreaChart />
        <div className={_.__days}>
          <span>1h</span>
          <span>24h</span>
          <span>7d</span>
          <span>1m</span>
          <span>3m</span>
          <span>6m</span>
          <span>1y</span>
          <span>All</span>
        </div>
      </div>
      <div className={_.__balance}>
        <div className={_.__balance_box}>
          <span className={_.__balance_title}>Asset:</span>
          <span className={_.__balance_price}>ES</span>
        </div>
        <div className={_.__balance_box}>
          <span className={_.__balance_title}>Margin balance</span>
          <span className={_.__balance_price}>$12.50</span>
        </div>
        <div className={_.__balance_box}>
          <span className={_.__balance_title}>Wallet balance</span>
          <span className={_.__balance_price}>$5,225.00</span>
        </div>
      </div>
    </div>
  );
}
