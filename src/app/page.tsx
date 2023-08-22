import Sidebar from "@/components/sidebar";
import Chat from "@/components/chat";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-row">
      <Sidebar />
      <Chat />
    </div>
  );
}
