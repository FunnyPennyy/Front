import React from "react";
import Banker from "./Banker";
import TaxOfficer from "./TaxOfficer";
import Statistic from "./Statistic";

const JobHandler = ({ job }) => {
  switch (job) {
    case "은행원":
      return <Banker />;
    case "국세청":
      return <TaxOfficer />;
    case "통계청":
      return <Statistic />;
    default:
      return <div> 딱히 뭐 안하는 직업 추후에 추가</div>;
  }
};

export default JobHandler;
