import Image from "next/image";

const Profile = () => {
  return (
    <div className="h-full flex flex-row items-center">
      <div className="h-full flex items-center mx-2 rounded-full border-2 border-blue-400 p-1">
        <Image
          alt="avatar"
          src="https://randomuser.me/api/portraits/men/32.jpg"
          width="45"
          height="45"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <span>Andriy Kucher</span>
        <span className="text-xs">
          <span className="align-middle">Offline</span>
          <div className="bg-red-700 h-3 w-3 ml-1 rounded-full inline-block align-middle"></div>
        </span>
      </div>
    </div>
  );
};
export default Profile;
