import Image from "next/image";

interface ItemData {
  name: string;
  image: string;
  lastMessage: string;
  messageStatus: string;
  status: string;
  lastMessageTime: string;
}

const ChatItem: React.FC<ItemData> = ({
  name,
  image,
  lastMessage,
  lastMessageTime,
  messageStatus,
  status,
}) => {
  const isMessageRead = messageStatus === "read";
  return (
    <li className="w-full h-16 border-b-2 border-gray-500 flex flex-row justify-between">
      <div className="h-full flex items-center mx-2">
        <Image
          alt="avatar"
          src={image}
          width="45"
          height="45"
          className="rounded-full"
        />

        <div className="mx-2 flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <span className="font-medium">{name}</span>
            <span className="font-light text-xs">{lastMessage}</span>
          </div>
        </div>
      </div>

      <div className="self-center mr-2 flex flex-col items-center">
        <span className="text-xs">{lastMessageTime}</span>
        {!isMessageRead && (
          <div className="bg-orange-500 h-3 w-3 ml-1 rounded-full inline-block align-middle"></div>
        )}
      </div>
    </li>
  );
};
export default ChatItem;
