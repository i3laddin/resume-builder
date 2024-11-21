import { useResumeVisibilityContext } from "../context/ResumeVisibility";

import { NameAndTitle, Summary, Contacts, WorkHistory, Education, Skills, TechSkills, Languages, Certifications } from "../components/Form";
import SectionWrapper from "../components/Shared/Section";

export const SectionList = () => {
  const { sectionTitles, sectionVisibility } = useResumeVisibilityContext();

  return (
    <div className="space-y-6">
      {
        sectionVisibility.nameAndTitle && (
        <SectionWrapper title={sectionTitles.nameAndTitle} sectionKey="nameAndTitle">
          <NameAndTitle />
        </SectionWrapper>
      )}
      {sectionVisibility.summary && (
        <SectionWrapper title={sectionTitles.summary} sectionKey="summary">
          <Summary />
        </SectionWrapper>
      )}
      {sectionVisibility.contacts && (
        <SectionWrapper title={sectionTitles.contacts} sectionKey="contacts">
          <Contacts />
        </SectionWrapper>
      )}
      {sectionVisibility.workHistory && (
        <SectionWrapper title={sectionTitles.workHistory} sectionKey="workHistory">
          <WorkHistory />
        </SectionWrapper>
      )}
      {sectionVisibility.education && (
        <SectionWrapper title={sectionTitles.education} sectionKey="education">
          <Education />
        </SectionWrapper>
      )}
      {sectionVisibility.skills && (
        <SectionWrapper title={sectionTitles.skills} sectionKey="skills">
          <Skills />
        </SectionWrapper>
      )}
      {sectionVisibility.techSkills && (
        <SectionWrapper title={sectionTitles.techSkills} sectionKey="techSkills">
          <TechSkills />
        </SectionWrapper>
      )}
      {sectionVisibility.languages && (
        <SectionWrapper title={sectionTitles.languages} sectionKey="languages">
          <Languages />
        </SectionWrapper>
      )}
      {sectionVisibility.certifications && (
        <SectionWrapper title={sectionTitles.certifications} sectionKey="certifications">
          <Certifications />
        </SectionWrapper>
      )}
    </div>
  );
};
