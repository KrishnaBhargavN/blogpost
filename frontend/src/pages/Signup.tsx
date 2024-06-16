import Quote from "../components/Quote";
import CreateAccount from "../components/CreateAccount";

function Signup() {
  return (
    <div className="grid grid-cols-2">
      <CreateAccount />
      <div className="invisible md:visible">
        <Quote />
      </div>
    </div>
  );
}
export default Signup;
