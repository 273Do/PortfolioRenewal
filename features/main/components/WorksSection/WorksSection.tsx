import CardList from "./CardList";
import Skills from "./Skills";

const WorksSection = async () => {
  return (
    <div className="m-3 px-2 sm:m-12">
      <Skills />
      <CardList />
    </div>
  );
};

export default WorksSection;
