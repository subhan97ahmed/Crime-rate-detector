import log1 from '../logo1.png'
import "../App.less"
import { Image } from 'antd';
import bg from '../bg.jpg'
import { Layout, Breadcrumb } from 'antd';
import { Typography } from 'antd';
import NavBar from '../components/NavBar';

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

const txtColor = "#6aceef"
const footerBgColor ="#2E2A2B"
const footerTxtColor = "#FFFFFF"
function AboutUs() {
    return (
        <>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" style={{ overflow: 'hidden' }}>
                        <Image src={log1} height={100} width={100} style={{ marginTop: "-20px" }} preview={false} ></Image>
                    </div>
                    <NavBar selectedOp='3' />
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: "64px", backgroundImage: `url(${bg})`, backgroundAttachment: "scroll" }}>
                    <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
                    <div className="site-layout-background" style={{ padding: "24px", minHeight: "780px", }}>
                        <div style={{ textAlign: 'center' }}>
                            <Title style={{ color: txtColor }}>About Us</Title>
                        </div>
                        <div style={{
                            position: 'absolute', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)', height: '40%', width: '70%',
                        }}>
                            {/*TODO: have to add about us information */}
                            <section>
  <div class="log_img">
    <br> <br><br>
    <div class="box1">
        <h1 style="text-align: center; font-size: 35px;font-family: Lucida Console;">
        Mentors Name</h1>
        <h1 style="text-align: center;font-size: 20px;">Sameer Ahmed Siddiqui</h1>
        <h1 style="text-align: center;font-size: 20px;">Ovais Ashraf</h1>
        <h1 style="text-align: center; font-size: 35px;font-family: Lucida Console;">
        Team B Members</h1>
        <h1 style="text-align: center;font-size: 20px;">Subhan Ahmed</h1>
        <h1 style="text-align: center;font-size: 15px;">subhan97ahmed@gmail.com</h1>
        <h1 style="text-align: center;font-size: 20px;">Fiza Ahmed</h1>
        <h1 style="text-align: center;font-size: 15px;">fiza.1601260@gmail.com</h1>
        <h1 style="text-align: center;font-size: 20px;">Qaseem</h1>
        <h1 style="text-align: center;font-size: 15px;">qaseemsamdani2000@gmail.com</h1>
       </div>
        
  </div>
</section>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: footerBgColor, color: footerTxtColor }}>Design ©2021 Created by Team B</Footer>
            </Layout>
        </>
    );
}

export default AboutUs