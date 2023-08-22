import ChatList from "./chat-list";
import StupidLogo from "./logo";

const Sidebar = () => {
  return (
    <div className="border-2 border-black w-1/5 h-full">
      <StupidLogo />
      <ChatList />
    </div>
  );
};
export default Sidebar;
