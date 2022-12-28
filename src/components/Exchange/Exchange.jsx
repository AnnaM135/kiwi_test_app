import _ from "./exchange.module.scss";
import ClosedEyeIcon from "../../assets/images/eye-close.svg";
import SortIcon from "../../assets/images/sort-icon.svg";
import SearchIcon from "../../assets/images/search.svg";
import {savingsData} from "../../data/savingsData";

import { MediumInput } from "../../elements/MeduimInput/MediumInput";
import { SearchInput } from "../../elements/SearchInput/SearchInput";
import { SavingList } from "../../elements/CompanySavingList.jsx/CompanySavingList";

export function Exchange() {
  return (
    <div className={_._}>
      <div className={_.__possibillites}>
        <MediumInput name="Hide balances" icon={ClosedEyeIcon} />
        <MediumInput name="Sort" icon={SortIcon} />
      </div>
      <div className={_.__search}>
       <SearchInput name="Search your exchange" icon={SearchIcon} />
      </div>
      <div className={_.__savings}>
        {savingsData.map(list => (
            <SavingList key={list.id} data={list} />
        ))}
      </div>
    </div>
  );
}
