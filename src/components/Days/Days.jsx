import React from "react";
import _ from "./days.module.scss";

function Days({children}) {
  return (
    <div className={_._}>
        { children }
      <div className={_.__date}>
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
  );
}

export default Days;
