import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Post from "./pages/Post";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/id/:id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
