import React from "react";
import ComicsPage from "../../Components/ComicsPage/ComicsPage";
import ComicsHistory from "../../Components/ComicsHistory/ComicsHistory";

const RtComicsPage = () => {
  return (
    <div style={{ marginTop: "80px", marginBottom: "80px" }}>
      <ComicsPage />
      <div style={{ width: "100%", marginTop: "20px" }}>
        <ComicsHistory />
      </div>
    </div>
  );
};

export default RtComicsPage;
