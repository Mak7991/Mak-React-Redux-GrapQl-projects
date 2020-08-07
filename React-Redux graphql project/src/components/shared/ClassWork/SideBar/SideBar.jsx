import React from "react";
import "components/shared/ClassWork/SideBar/SideBar.scss";
const SideBar = (props) => {
  const style = "sidebar-all";
  const styleActive = "sidebar-all active";
  const { activeKey } = props;
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        {props.items.map((el, index) => (
          <div
            className={activeKey === el ? styleActive : style}
            key={index}
            onClick={() => {
              props.clicked(el);
            }}>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};
export default SideBar;
