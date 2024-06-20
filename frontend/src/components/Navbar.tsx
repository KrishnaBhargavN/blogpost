import Avatar from "./Avatar";
import NewPostButton from "./NewPostButton";
import { useNavigate } from "react-router-dom";

function Navbar({ username }: { username: string }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between border-b-2">
        <div className="p-4 pl-6 font-semibold">Blogpost</div>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center pr-10">
            <NewPostButton
              onClick={() => {
                navigate("/post");
              }}
              name="New Post"
            />
          </div>
          <div className="flex flex-col justify-center pr-10">
            <div className="items-center w-10">
              <Avatar size={"big"} username={username} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
