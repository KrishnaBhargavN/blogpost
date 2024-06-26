import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import Skeletons from "../components/Skeletons";
import { useBlogs } from "../hooks/useBlogs";

function Blogs() {
  const { loading, blogs } = useBlogs();
  if (loading)
    return (
      <div>
        <Navbar username="Anonymous" />
        <div className="flex justify-center">
          <div className="flex flex-col w-4/6 items-center">
            <Skeletons />
            <Skeletons />
            <Skeletons />
            <Skeletons />
            <Skeletons />
            <Skeletons />
          </div>
        </div>
      </div>
    );
  console.log(blogs);

  return (
    <div>
      <Navbar username={blogs[0].author.name || "Anonymous"} />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center max-w-4xl">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.publishedDate}
              authorName={
                blog.author.name === null ? "Anonymous" : blog.author.name
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Blogs;
