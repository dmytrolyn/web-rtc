import ChatItem from "./chat-item";

const mockData = [
  {
    id: 1,
    name: "Meg Dia",
    lastMessage: "nothing else",
    messageStatus: "unread",
    status: "online",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    lastMessageTime: "20:36",
  },
  {
    id: 2,
    name: "Dwayne Johnson",
    lastMessage: "but more",
    messageStatus: "read",
    status: "online",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    lastMessageTime: "20:36",
  },
  {
    id: 3,
    name: "Chris Harris",
    lastMessage: "you know",
    messageStatus: "read",
    status: "online",
    image: "https://randomuser.me/api/portraits/men/79.jpg",
    lastMessageTime: "20:36",
  },
  {
    id: 4,
    name: "Barak Obama",
    lastMessage: "more of us",
    messageStatus: "read",
    status: "offline",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    lastMessageTime: "20:36",
  },
  {
    id: 5,
    name: "Andriy Kucher",
    lastMessage: "you lose",
    messageStatus: "read",
    status: "not-here",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    lastMessageTime: "20:36",
  },
];

const ChatList = () => {
  return (
    <ul className="flex flex-col w-full h-full">
      {mockData.map(({ id, ...item }) => (
        <ChatItem key={id} {...item} />
      ))}
    </ul>
  );
};
export default ChatList;
