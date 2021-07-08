import "../App.less"
import bg from '../bg.jpg'
import { Layout, Typography} from 'antd';
import NavBar from '../components/NavBar';
import NavLogo from '../components/NavLogo'
//colors
import * as conColors from '../colors'
const { Title } = Typography;
const { Header, Content, Footer } = Layout;

const txtColor = conColors.txtColor
const footerBgColor = conColors.footerBgColor
const footerTxtColor = conColors.footerTxtColor
function AboutUs() {
    return (
        <>
            <Layout className="aboutus">
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <NavLogo></NavLogo>
                    <NavBar selectedOp='3' />
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: "64px", backgroundImage: `url(${bg})`, backgroundAttachment: "scroll" }}>
                    <div style={{ margin: '16px 0' }}></div>
                    <div className="site-layout-background" style={{ padding: "24px", minHeight: "780px", }}>
                        <div style={{ textAlign: 'center' }}>
                            <Title style={{ color: txtColor }}>About Us</Title>
                        </div>
                        <div style={{
                            position: 'absolute', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)', height: '40%', width: '70%',
                        }}>
                            {/*TODO: have to add about us info */}
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: footerBgColor, color: footerTxtColor }}>Design ©2021 Created by Team B</Footer>
            </Layout>
        </>
    );
}

export default AboutUs