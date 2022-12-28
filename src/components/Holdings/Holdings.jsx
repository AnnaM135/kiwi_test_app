import { TopTitle } from "../../elements/TopTitle/TopTitle";
import _ from "./holdings.module.scss";
import { tableRow } from "../../data/holdingsTable";
import { tableColumn } from "../../data/holdingsTable";
import { TableRow } from "../../elements/TableRow/TableRow";
import { TableCol } from "../../elements/TableCol/TableCol";
import BurgerIcon from "../../assets/images/burger.svg";

export function Holdings() {
  return (
    <div className={_._}>
      <div className={_.__line}>
        <TopTitle title="Holdings" />
      </div>
      <div className={_.__tr}>
        {tableRow.map((head, index) => (
          <TableRow key={index} data={head} />
        ))}
        <img className={_.__burger} src={BurgerIcon} alt="burger icon" />
      </div>
      <div>
        {tableColumn.map((body) => (
          <TableCol key={body.id} data={body} />
        ))}
      </div>
    </div>
  );
}
