import React from "react";
import "./App.css";
import BottomLeft from "./charts/bottomleft/bottomleft";
import BottomRight from "./charts/bottomright/bottomright";
import TopLeft from "./charts/topLeft/topLeft";
import TopRight from "./charts/topright/topRight";

function App() {
  return (
    <React.Fragment>
      <TopRight />
      {/* <TopLeft /> */}
      {/* <BottomRight /> */}
      {/* <BottomLeft /> */}
    </React.Fragment>
  );
}

export default App;
