import { Analytics } from "../Analytics/Analytics";
import { BarChart } from "../Charts/BarChart";
import { Coins } from "../Coins/Coins";
import { Exchange } from "../Exchange/Exchange";
import { Futures } from "../Futures/Futures";
import { Holdings } from "../Holdings/Holdings";
import { MostUsable } from "../MostUsable/MostUsable";
import { SubscribeForFree } from "../SubscribeForFree/SubscribeForFree";
import { TotalPoints } from "../TotalPoints/TotalPoints";
import { UserGoals } from "../UserGoals/UserGoals";
import _ from "./mainView.module.scss";
export function MainView() {
  return (
    <div className={`${_._} container`}>
      <div className={_.__box}>
        <Exchange />
      </div>
      <div className={_.__box}>
        <SubscribeForFree />
      </div>
      <div className={_.__box}>
        <div className={_.__box_area}>
          <TotalPoints />
        </div>
        <div className={_.__box_area}>
          <MostUsable />
        </div>
        <div className={_.__box_area}>
          <Coins />
        </div>
        <div className={_.__box_area}>
          <UserGoals />
        </div>
        <div className={_.__box_area}>
          <Analytics />
        </div>
        <div className={_.__box_area}>
          <Futures />
        </div>
        <div className={_.__box_area}>
          <Holdings />
        </div>
      </div>
    </div>
  );
}
