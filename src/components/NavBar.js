import { Menu } from 'antd';
import '../App.less';
function NavBar(props) {

    const onClickNav=(key) => {
        if (key === 1) {
          window.location.replace("/");
        }
        else if (key === 2) {
            // selectedOp=2
          window.location.replace("/customdata")
        }
        else if (key === 3) {
            // selectedOp=3
            window.location.replace("/about")
        }
      }
      
    return(
        <>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[props.selectedOp]}   >
            <Menu.Item key="1" onClick={()=> onClickNav(1)}>Home</Menu.Item>
            <Menu.Item key="2" onClick={()=> onClickNav(2)}>Custom Data</Menu.Item>
            <Menu.Item key="3" onClick={()=> onClickNav(3)}>About</Menu.Item>
          </Menu>
        </>
    );
}
export default NavBar;