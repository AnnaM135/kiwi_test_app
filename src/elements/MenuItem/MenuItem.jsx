import _ from './menuItem.module.scss';
import ArrowDownIcon from "../../assets/images/arrow-down.svg";

export function MenuItem({ menu }) {
  return (
    <li className={menu.active ? `${_._} ${_._active}` : _._} >
        <img className={ _.__icon } src={menu.icon} alt={menu.name} />
        <a className={ _.__link } href={menu.path}>{menu.name}</a>
        {menu.dropdown && (
          <img className={ _.__arrow } src={ArrowDownIcon} alt="Arrow Down Icon" />
        )}
    </li>
  )
}
