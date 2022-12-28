import _ from "./mediumInput.module.scss";

export function MediumInput({ name, icon }) {
  return (
    <div className={_._}>
      <span className={_.__name}>{name}</span>
      <img className={_.__icon} src={icon} alt="icon" />
    </div>
  );
}
