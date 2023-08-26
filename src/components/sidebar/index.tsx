import ChatList from "./chat-list";
import StupidLogo from "./logo";

const Sidebar = () => {
  return (
    <div className="border-r-2 border-gray-500 w-1/5 h-full flex flex-col">
      <StupidLogo />
      <ChatList />
    </div>
  );
};
export default Sidebar;
