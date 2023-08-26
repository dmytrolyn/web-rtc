import Actions from "./actions";
import Profile from "./profile";

const TopPanel = () => {
  return (
    <div className="flex flex-row justify-between w-full border-b-2 border-gray-500 py-1">
      <Profile />
      <Actions />
    </div>
  );
};
export default TopPanel;
