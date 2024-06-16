interface AvatarProps {
  username: string;
  size: string;
}

export default function Avatar({ username, size }: AvatarProps) {
  console.log("size : ", size);

  return (
    <div
      className={` relative inline-flex items-center justify-center w-${
        size === "big" ? "10" : "6"
      } h-${
        size === "big" ? "10" : "6"
      } overflow-hidden bg-gray-100 rounded-full`}
    >
      <span className="font-medium text-gray-600">
        {username[0].toUpperCase()}
      </span>
    </div>
  );
}
