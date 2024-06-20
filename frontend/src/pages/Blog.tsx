import BlogInfo from "../components/BlogInfo";
import { useParams } from "react-router-dom";
import AuthorInfo from "../components/AuthorInfo";
import { useBlog } from "../hooks/useBlog";
import Navbar from "../components/Navbar";
import Skeletons from "../components/Skeletons";
import BlogSkeletons from "../components/BlogSkeletons";

interface Blog {
  title: string;
  content: string;
  id: string;
  publishedDate: string;
  author: {
    name: string | null;
  };
}

function Blog() {
  const { id } = useParams();
  if (!id) return <div>Invalid Blog ID</div>;
  const { blog, loading } = useBlog(id);
  if (loading)
    return (
      <div>
        <div>
          <Navbar username="Anonymous" />
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <BlogSkeletons />
            </div>
            <div className="col-span-4">
              <Skeletons />
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div>
      <Navbar username={blog.author.name || "Anonymous"} />
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <BlogInfo blog={blog} />
        </div>
        <div className="col-span-4">
          <AuthorInfo blog={blog} />
        </div>
      </div>
    </div>
  );
}
export default Blog;
