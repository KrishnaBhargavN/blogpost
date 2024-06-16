function TitleInput({ setTitle }: { setTitle: (title: string) => void }) {
  return (
    <div>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          placeholder="Title"
          className="peer font-extrabold h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-2xl  text-black outline outline-0 transition-all placeholder-shown:border-gray-200 placeholder:font-semibold disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-50 focus:placeholder:opacity-100"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </div>
  );
}
export default TitleInput;
