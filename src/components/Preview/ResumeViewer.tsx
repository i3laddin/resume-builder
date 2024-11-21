import { ResumeState, useResumeContext } from "../../context/ResumeContext";
import { useResumeVisibilityContext } from "../../context/ResumeVisibility";
import { usePDF } from "react-to-pdf";
import { Button } from "../ui/button";
import TechSkillList from "../Shared/TechSkills";
import SkillList from "../Shared/Skills";
import ContactList from "../Shared/Contacts";
import ResumeHeader from "../Shared/ResumeHeader";
import { isStateEmpty } from "../../lib/utils/utils";
import { useMemo } from "react";



export const ResumeViewer = () => {
   
  const { state } = useResumeContext();
  const { sectionVisibility, sectionTitles } = useResumeVisibilityContext();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const isEmpty = useMemo(() => isStateEmpty<ResumeState>(state),[state])

  return (
    <div className={`flex flex-col items-center p-6 min-h-screen`}>
      <div
        className={`bg-white shadow-lg rounded-md w-full max-w-4xl p-8 h-[90vh] overflow-auto ${!isEmpty && "grid grid-cols-3 gap-6"}`}
        ref={targetRef}
      >
        {isEmpty ? (
          <div className="w-full h-full flex justify-center items-center">Start build your resume!</div>
        ) : (
          <>
          
        <div className="col-span-1">
          {sectionVisibility.nameAndTitle && (
           <ResumeHeader name={state.name} title={state.title} />
          )}

          {sectionVisibility.contacts && (
            <ContactList {...state} />
          )}

          {sectionVisibility.skills && state.skills.length > 0 && (
            <SkillList
            title={sectionTitles.skills}
            skills={state.skills}
            />
          )}
        {sectionVisibility.techSkills && state.techSkills.length > 0 && (
           <TechSkillList 
           title={sectionTitles.techSkills}
           techSkills={state.techSkills}
           />
          )}

        </div>

        <div className="col-span-2">
          {sectionVisibility.summary && state.summary && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {sectionTitles.summary}
              </h2>
              <p className="text-gray-700">{state.summary}</p>
            </div>
          )}

          {sectionVisibility.workHistory && state.workHistory.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {sectionTitles.workHistory}
              </h2>
              {state.workHistory.map((item, index) => (
                <div key={index} className="mb-4">
                  <p className="font-medium text-lg text-gray-800">
                    {item.role} - {item.company}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.startDate} - {item.endDate || "Present"}
                  </p>
                  {item.description && (
                    <p className="text-gray-700">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {sectionVisibility.education && state.education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {sectionTitles.education}
              </h2>
              {state.education.map((item, index) => (
                <div key={index} className="mb-4">
                  <p className="font-medium text-lg text-gray-800">
                    {item.degree} - {item.institution}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.startDate} - {item.endDate || "Present"}
                  </p>
                </div>
              ))}
            </div>
          )}
        
          {sectionVisibility.certifications && state.certifications.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {sectionTitles.certifications}
              </h2>
              <ul className="list-disc pl-6">
                {state.certifications.map((cert, index) => (
                  <li key={index} className="text-gray-700">
                    {cert.name} - {cert.issuer} - {cert.issueDate || "Unknown"}
                  </li>
                ))}
              </ul>
            </div>
          )}

  {sectionVisibility.languages && state.languages.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {sectionTitles.languages}
              </h2>
              <ul className="space-y-2">
                {state.languages.map((lang, index) => (
                  <li key={index} className="text-gray-700">
                    {lang.language} - {lang.proficiency || "Unknown"}
                  </li>
                ))}
              </ul>
            </div>
          )}


        </div>
          </>
        )}
       
        </div>

      <Button
      onClick={() => toPDF()}
        className="mt-6 sticky bottom-20"
      >
        Download as PDF
      </Button>
    </div>
  );
};
