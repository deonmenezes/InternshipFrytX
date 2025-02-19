import React from "react";
import HomePageTest from "./test";
import { WorkProcessData } from "../../../types";

interface TimeLinePagaProps {
  workProcess: WorkProcessData[];
}

const TimeLinePaga: React.FC = () => {
  return (
    <div className="bg-[#1A1A1A] py-16">
      <HomePageTest />
    </div>
  );
};

export default TimeLinePaga;
