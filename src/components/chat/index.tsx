import DataInput from "./data-input";
import Messages from "./messages";
import TopPanel from "./top-panel";

const Chat = () => {
  return (
    <div className="flex flex-col h-full w-4/5">
      <TopPanel />
      <Messages />
      <DataInput />
    </div>
  );
};
export default Chat;
