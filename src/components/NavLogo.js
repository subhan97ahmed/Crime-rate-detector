import log1 from '../logo1.png'
import {Image} from 'antd'
import '../App.less'
function NavLogo() {
    return(
        <div className="logo" style={{ overflow: 'hidden' }}>
            <Image src={log1} height={125} width={125} style={{ marginTop: "-20px" }} preview={false} ></Image>
          </div>
    )
}
export default NavLogo