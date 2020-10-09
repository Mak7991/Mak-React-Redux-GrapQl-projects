import React from "react";

// component
import TotalGraph from "components/GoalPanelUiComponent/AssetsGraph/TotalGraph";
import ReturnGraph from "components/GoalPanelUiComponent/AssetsGraph/ReturnGraph";
import Header from "components/shared/Header/Header";
import UserDetail from "components/GoalPanelUiComponent/UserDetail/UserDetail";
// scss
import "./GoalPanel.scss";

function GoalPanel() {
  return (
    <div className="home-page">
      <Header />
      <UserDetail />
      <div className="user-graph">
        <div className="user-total-assets-graph">
          <TotalGraph />
        </div>
        <div className="user-total-return-graph">
          <ReturnGraph />
        </div>
      </div>
    </div>
  );
}

export default GoalPanel;
