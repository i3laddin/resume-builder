import React from "react";
import { ResumeProvider } from "../context/ResumeContext";
import { SectionList } from "./SectionList";
import { ResumeVisibilityProvider } from "../context/ResumeVisibility";
import SectionsControlBox from "../components/Shared/SectionsControlBox";
import { ResumeViewer } from "../components/Preview/ResumeViewer";
const ResumeBuilder: React.FC = () => {
  return (
    <ResumeProvider>
      <ResumeVisibilityProvider>
        <div className="flex space-x-8 p-6">
          <div className="w-1/2">
            <div className="space-y-6">
              <SectionsControlBox />
              <SectionList />
            </div>
          </div>
          <div className="fixed right-0 w-1/2">
            <ResumeViewer />
          </div>
        </div>
      </ResumeVisibilityProvider>
    </ResumeProvider>
  );
};

export default ResumeBuilder;
