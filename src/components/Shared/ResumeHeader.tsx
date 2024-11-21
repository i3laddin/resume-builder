
interface HeaderProps {
  name: string;
  title: string;
}

const ResumeHeader: React.FC<HeaderProps> = ({ name, title }) => {
  return (
    <div className="mb-6 text-center">
    <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
    <p className="text-lg text-gray-600">{title}</p>
  </div>
  );
};

export default ResumeHeader;
