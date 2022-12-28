import _ from "./analytics.module.scss";
import { analyticData } from "../../data/analyticsData";
import { AnalyticsElement } from "../../elements/AnalyticsElement/AnalyticsElement";
import { TopTitle } from "../../elements/TopTitle/TopTitle";

export function Analytics() {
  return (
    <div className={_._}>
      <TopTitle title="Analytics"/>
      <div className={_.__list}>
        {analyticData.map((item) => (
          <AnalyticsElement key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
