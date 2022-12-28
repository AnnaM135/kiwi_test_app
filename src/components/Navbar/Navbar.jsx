import { useState } from "react";
import { menuData } from "../../data/menu";
import { MenuItem } from "../../elements/MenuItem/MenuItem";
import _ from "./navbar.module.scss";

export function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className={_._}>
      <ul className={isMobile ? _.__mobile : _.__list}
        onClick={() => setIsMobile(false)}>
        {menuData.map((menu) => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </ul>
      <div className={_.__icon} onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <div className={_.__icon_close}></div>
        ) : (
          <div className={_.__icon_mobile}>
            <div className={_.__icon_mobile_trans}></div>
          </div>
        )}
      </div>
    </nav>
  );
}
