import { calculateLevelWidth } from "../../lib/utils/utils";

interface TechSkillProps {
  name: string;
  proficiency: string;
}

interface TechSkillListProps {
  techSkills: TechSkillProps[];
  title: string;
}

const TechSkillList: React.FC<TechSkillListProps> = ({ techSkills, title }) => {
  return (
    <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {title}
              </h2> 
              <ul className="space-y-2">
                {techSkills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="flex-grow text-gray-700">{skill.name}</span>
                    <div className="w-1/2 bg-gray-200 h-2 rounded-md overflow-hidden ml-4">
                      <div
                        className="bg-blue-500 h-full"
                        style={{ width: `${calculateLevelWidth(skill.proficiency)}` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
  );
};

export default TechSkillList;
