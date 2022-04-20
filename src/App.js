import React from "react";
import "./App.css";
import BottomLeft from "./charts/bottomleft/bottomright";
import BottomRight from "./charts/bottomright/bottomright";
import TopLeft from "./charts/topLeft/topLeft";

function App() {
  return (
    <React.Fragment>
      <TopLeft />
      {/* <BottomRight /> */}
      {/* <BottomLeft /> */}
    </React.Fragment>
  );
}

export default App;
