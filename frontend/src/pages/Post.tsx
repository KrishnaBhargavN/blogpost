import { useState } from "react";
import Navbar from "../components/Navbar";
import SubmitPost from "../components/SubmitPost";
import TextArea from "../components/TextArea";
import TitleInput from "../components/TitleInput";
import axios from "axios";
import { BACKEND_URL } from "../config";

function Post() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const data = {
    title: title,
    content: content,
  };

  const headers = {
    Authorization: "Bearer " + localStorage.getItem("jwt"),
  };

  return (
    <div>
      <Navbar />
      <div className="pt-5 pb-10 pr-10 ">
        <SubmitPost
          name="Post"
          onClick={() => {
            axios
              .post(`${BACKEND_URL}/api/v1/blog`, data, { headers })
              .then((res) => {
                console.log(res);
              });
          }}
        />
      </div>
      <div className="p-10">
        <TitleInput setTitle={setTitle} />
      </div>
      <div className="p-10">
        <TextArea setContentFromParent={setContent} />
      </div>
    </div>
  );
}
export default Post;
