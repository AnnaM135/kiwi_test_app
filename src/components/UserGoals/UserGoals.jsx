import React from "react";
import { BarChart } from "../Charts/BarChart";
import Days from "../Days/Days";
import _ from "./userGoals.module.scss";

export function UserGoals() {
  return (
    <div className={_._}>
      <div className={_.__data}>
        <div className={_.__data_img}>
          <span>D</span>
        </div>
        <div className={_.__data_box}>
          <span className={_.__data_price}>$ 855.914.000 </span>
          <span className={_.__data_name}>Mr. Nick Peterson</span>
        </div>
      </div>
      <Days>
        <BarChart />
      </Days>
    </div>
  );
}
