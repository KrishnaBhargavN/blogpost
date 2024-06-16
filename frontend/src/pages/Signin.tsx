import LogintoAccount from "../components/LogintoAccount";
import Quote from "../components/Quote";

function Signin() {
  return (
    <div className="grid grid-cols-2">
      <LogintoAccount />
      <div className="invisible md:visible">
        <Quote />
      </div>
    </div>
  );
}
export default Signin;
