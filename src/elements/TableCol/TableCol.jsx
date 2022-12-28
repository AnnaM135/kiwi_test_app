import _ from "./tableCol.module.scss";
import PriceIcon from "../../assets/images/price-line.svg";
import ArrowUp from "../../assets/images/arrow-up.svg";
import MoreIcon from "../../assets/images/more-icon.svg";

export function TableCol({data}) {
  return (
    <div className={_._}>
        <div className={_.__name}>
            <img className={_.__img} src={data.icon} alt="holding image" />
            <span>{data.name}</span>
        </div>
        <div className={_.__box}>
            <span>{data.amount}</span>
        </div>
        <div className={_.__box}>
            <span>{data.total}</span>
        </div>
        <div className={_.__name}>
            <img className={_.__arrow} src={ArrowUp} alt="Arrow Up icon" />
            <span className={_.__charge}>{data.charge}</span>
        </div>
        <div  className={_.__box}>
            <span>{data.cap}</span>
        </div>
        <div  className={_.__box}>
            <span>{data.price}</span>
        </div>
        <div  className={_.__box}>
            <img src={PriceIcon} alt="price icon" />
        </div>
        <div className={_.__more}>
            <img src={MoreIcon} alt="more icon" />
        </div>
    </div>
  )
}

