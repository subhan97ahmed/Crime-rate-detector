import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  localStorage.removeItem("email");
  history.push("/");
  window.location.reload(true);
};

export default Logout;
