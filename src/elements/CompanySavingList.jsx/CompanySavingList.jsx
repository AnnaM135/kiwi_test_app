import _ from "./companySavingList.module.scss";
import EditIcon from "../../assets/images/edit-icon.svg";
import DeleteIcon from "../../assets/images/delete-icon.svg";
import RedDiagram from "../../assets/images/red-diagram.svg";
import GreenDiagram from "../../assets/images/green-diagram.svg";

export function SavingList({ data }) {
  return (
    <div className={!data.isOpen ? _._ : _.__open}>
      <div className={_.__company_info}>
        <img className={_.__company_img} src={data.companyIcon} alt="company icon" />
        <h4 className={_.__company_name}>{data.companyName}</h4>
        <span
          className={_.__company_percent}
          style={{ color: !data.isOpen ? '#FF0000' : '#61E224' }}
        >
          {data.percent}
        </span>
      </div>
      {!data.isOpen ? (
        <div className={_.__icons}>
          <img src={RedDiagram} alt="diagram" />
          <img className={_.__icons_edit} src={EditIcon} alt="edit icon" />
          <img src={DeleteIcon} alt="delete icon" />
        </div>
      ) : (
        <div className={_.__open_content}>
          <div className={_.__company_info}>
            <span className={_.__company_price}>$1000.00</span>
            <img src={GreenDiagram} alt="diagram" />
          </div>
          <div className={_.__company_desc}>
            <div className={`${_.__company_info} ${_.__company_item}`}>
              <img src={data.companyIcon} alt="company icon" />
              <h4 className={_.__company_name}>{data.companyName} Savings</h4>
            </div>
            <div className={`${_.__company_info} ${_.__company_item}`}>
              <img src={data.companyIcon} alt="company icon" />
              <h4 className={_.__company_name}>{data.companyName} Futures</h4>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}
