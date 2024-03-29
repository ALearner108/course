import { useSelector } from "react-redux";
function Welcome() {
  const userName = useSelector((state) => state.account.username);

  return (
    <div to="/login" className="section rel">
      <h2 className="title s24 fontb">Welcome Back, {userName} </h2>
    </div>
  );
}
export default Welcome;
