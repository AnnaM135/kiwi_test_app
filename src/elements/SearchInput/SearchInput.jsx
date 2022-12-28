import _ from "./searchInput.module.scss";

export function SearchInput({ name, icon }) {
  return (
    <div className={_._}>
        <img className={_.__icon} src={icon} alt="icon" />
        <input className={_.__name} type="text" placeholder={name}/>
    </div>
  )
}

