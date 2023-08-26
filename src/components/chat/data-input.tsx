const DataInput = () => {
  return (
    <div className="flex flex-row w-full border-t-2 border-gray-500 h-16">
      <textarea
        className="w-full h-full px-2 align-middle outline-none resize-none"
        name="message"
        placeholder="Type a message here"
      />
      <button className="px-2 rounded-xl border-black border-2" type="button">
        Send
      </button>
    </div>
  );
};
export default DataInput;
