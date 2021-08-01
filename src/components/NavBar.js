import { Menu } from "antd";
import "../App.less";
function NavBar(props) {
  const onClickNav = (key) => {
    if (key === 1) {
      window.location.replace("/");
    } else if (key === 2) {
      // selectedOp=2
      window.location.replace("/customdata");
    } else if (key === 3) {
      // selectedOp=3
      window.location.replace("/about");
    } else if (key === 4) {
      // selectedOp=4
      window.location.replace("/login");
    } else if (key === 5) {
      // selectedOp=5
      window.location.replace("/signup");
    }
  };

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[props.selectedOp]}
      >
        <Menu.Item key="1" onClick={() => onClickNav(1)}>
          Home
        </Menu.Item>
        <Menu.Item key="2" onClick={() => onClickNav(2)}>
          Custom Data
        </Menu.Item>
        <Menu.Item key="3" onClick={() => onClickNav(3)}>
          About
        </Menu.Item>
        <Menu.Item key="4" onClick={() => onClickNav(4)}>
          Login
        </Menu.Item>
        <Menu.Item key="5" onClick={() => onClickNav(5)}>
          Signup
        </Menu.Item>
      </Menu>
    </>
  );
}
export default NavBar;
