/* Import data */
import information from "../data/information";

const Information: React.FC = () => {
  return (
    <>
      {information.map((item, _) => (
        <div key={_}>
          <h3 className="text-lg font-medium">{item.title}</h3>
          <span className="font-light">{item.value}</span>
        </div>
      ))}
    </>
  );
};

export default Information;
