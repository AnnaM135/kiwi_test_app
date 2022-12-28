import _ from "./analyticsElement.module.scss";

export function AnalyticsElement({ data }) {
  return (
    <div className={_._}>
        <img className={_.__img} src={data.icon} alt="icon" />
        <span className={_.__title}>{data.title}</span>
        <span className={_.__number}>{data.number}</span>
    </div>
  )
}

