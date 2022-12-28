import _ from "./tableRow.module.scss";

export function TableRow({data}) {
  return (
    <div className={_._}>
       <h3>{data}</h3>
    </div>
  )
}

