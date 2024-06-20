interface Blog {
  title: string;
  content: string;
  id: string;
  publishedDate: string;
  author: {
    name: string | null;
  };
}

function BlogInfo({ blog }: { blog: Blog }) {
  return (
    <div className="flex flex-col p-10">
      <div className="">
        <div>
          <div className="text-4xl font-extrabold ">{blog?.title}</div>
        </div>
      </div>
      <div className=" text-slate-600 pt-4">
        posted on {blog?.publishedDate.substring(0, 10)}
      </div>
      <div>
        <div className=" text-balance justify-center py-10">
          {blog?.content}
        </div>
      </div>
    </div>
  );
}
export default BlogInfo;
