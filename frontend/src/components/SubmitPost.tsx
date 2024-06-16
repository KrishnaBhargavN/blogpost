function SubmitPost({ name, onClick }: { name: string; onClick: () => void }) {
  return (
    <div className="flex justify-end">
      <button
        onClick={onClick}
        className="active:ring-4 w-fit  active:ring-slate-200 active:outline-none bg-slate-900 rounded-3xl border-2 text-white px-4 py-2 hover:bg-white hover:border-black hover:text-black"
      >
        {name}
      </button>
    </div>
  );
}
export default SubmitPost;
