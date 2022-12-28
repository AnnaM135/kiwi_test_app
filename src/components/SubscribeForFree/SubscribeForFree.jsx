import _ from "./subscribeForFree.module.scss";
import CancelIcon from "../../assets/images/cancel-icon.svg";

export function SubscribeForFree() {
  return (
    <div className={_._}>
      <div className={_.__info}>
        <h3>
          Your free trial has been started․ There are <span>5 days</span> left.
        </h3>
        <div className={_.__cancel}>
            <img className={_.__cancel_img} src={CancelIcon} alt="cancel-icon"/>
        </div>
      </div>
      <button className={`${_.__btn} lg-btn`}>Subscribe</button>
    </div>
  );
}
