import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps {
  id: string;
  title: string;
  content: string;
  publishedDate: string;
  authorName: string;
}

function BlogCard({
  id,
  title,
  content,
  publishedDate,
  authorName,
}: BlogCardProps) {
  return (
    <Link to={`/id/${id}`}>
      <div className="border-b-2  pl-2 p-6 cursor-pointer">
        <div className="flex justify-start pb-2">
          <div className="">
            <Avatar size={"small"} username={authorName} />
          </div>
          <div className="px-4  text-slate-600">{authorName}</div>
          <div className="flex flex-col justify-center">
            <CircleDot />
          </div>
          <div className="text-slate-400 pl-4">{publishedDate}</div>
        </div>
        <div className="text-xl font-bold">{title}</div>
        <div className="text-sm   text-slate-500">
          {content.length > 200 ? content.slice(0, 200) + "..." : content}
        </div>
        <div className="pt-2 ">
          {Math.ceil(content.length / 100) + " min read"}
        </div>
      </div>
    </Link>
  );
}

export function CircleDot() {
  return (
    <div>
      <div className="h-1 w-1 bg-slate-500 rounded-full"></div>
    </div>
  );
}

export default BlogCard;
