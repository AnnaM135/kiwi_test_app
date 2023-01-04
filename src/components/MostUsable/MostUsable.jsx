import { TopTitle } from "../../elements/TopTitle/TopTitle";
import { BarChartGraph } from "../Charts/BarChartGraph";
import _ from "./mostUsable.module.scss";

export function MostUsable() {
  return (
    <div className={_._}>
      <TopTitle title="Most usable exchanges" />
      <div className={_.__chart}>
        <BarChartGraph />
      </div>
    </div>
  );
}
