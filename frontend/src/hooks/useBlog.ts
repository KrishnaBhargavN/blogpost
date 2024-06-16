import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface Blog {
  title: string;
  content: string;
  id: string;
  publishedDate: string;
  author: {
    name: string | null;
  };
}

export const useBlog = (id: string) => {
  const [blog, setBlog] = useState<Blog>({
    title: "",
    content: "",
    id: "",
    publishedDate: "",
    author: {
      name: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(true);
  console.log(id);

  useEffect(() => {
    try {
      axios
        .get(`${BACKEND_URL}/api/v1/blog/id/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        })
        .then((response) => {
          console.log(response);

          setBlog(response.data.message);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { blog, loading };
};
