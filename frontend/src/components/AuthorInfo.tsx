import Avatar from "./Avatar";
interface Blog {
  title: string;
  content: string;
  id: string;
  publishedDate: string;
  author: {
    name: string | null;
  };
}
function AuthorInfo({ blog }: { blog: Blog }) {
  return (
    <div className="flex flex-col justify-start">
      <div className="px-20 pt-20 font-semibold">Author</div>
      <div className=" flex px-20 pt-5 ">
        <div className="">
          <Avatar
            username={blog.author.name === null ? "Krishna" : blog.author.name}
            size={"big"}
          />
        </div>
        <div>
          <div className="text-xl font-semibold pl-5 pt-1">
            {blog.author.name === null ? "Krishna" : blog.author.name}
          </div>
          <div className="pl-5 pt-2">
            Random catchphrase to make the author look cool and interesting
          </div>
        </div>
      </div>
    </div>
  );
}
export default AuthorInfo;
