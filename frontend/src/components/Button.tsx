function Button({ name, onClick }: { name: string; onClick: () => void }) {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className="active:ring-4 active:ring-slate-200 active:outline-none bg-slate-900 rounded-lg border-2 text-white px-4 py-2 hover:bg-white hover:border-black hover:text-black w-full"
      >
        {name}
      </button>
    </div>
  );
}
export default Button;
