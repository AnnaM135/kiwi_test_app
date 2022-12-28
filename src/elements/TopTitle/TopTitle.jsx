import _ from "./topTitle.module.scss";

export function TopTitle({ title }) {
  return (
    <div className={_._}>
      <h4 className={_.__title}>{title}</h4>
      <span className={_.__more}>See more</span>
    </div>
  );
}
